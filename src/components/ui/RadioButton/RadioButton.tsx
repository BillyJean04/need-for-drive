import { InputHTMLAttributes, useId } from "react";

import {
  StyledRadioButton,
  StyledRadioButtonContainer,
} from "@/components/ui/RadioButton/RadioButton.styled";

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  radioId: number;
  label: string;
}

export function RadioButton({ radioId, label, ...props }: RadioButtonProps) {
  const id = useId();

  return (
    <StyledRadioButtonContainer>
      <StyledRadioButton id={id} value={radioId} type="radio" {...props} />
      <label htmlFor={id}>{label}</label>
    </StyledRadioButtonContainer>
  );
}
