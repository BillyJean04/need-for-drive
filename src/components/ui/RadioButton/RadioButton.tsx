import { InputHTMLAttributes, useId } from "react";

import {
  StyledRadioButton,
  StyledRadioButtonContainer,
} from "@/components/ui/RadioButton/RadioButton.styled";

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  radioId: number;
  label: string;
  disabled?: boolean;
}

export function RadioButton({ radioId, label, disabled = false, ...props }: RadioButtonProps) {
  const id = useId();

  return (
    <StyledRadioButtonContainer $disabled={disabled}>
      <StyledRadioButton disabled={disabled} id={id} value={radioId} type="radio" {...props} />
      <label htmlFor={id}>{label}</label>
    </StyledRadioButtonContainer>
  );
}
