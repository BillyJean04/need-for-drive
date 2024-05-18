import { InputHTMLAttributes, useId } from "react";

import { StyledCheckbox, StyledCheckboxContainer } from "./Checkbox.styled";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  disabled?: boolean;
  checked?: boolean;
}

export function Checkbox({ label, checked, disabled, ...props }: CheckboxProps) {
  const id = useId();

  return (
    <StyledCheckboxContainer $disabled={disabled} $checked={checked}>
      <StyledCheckbox disabled={disabled} id={id} checked={checked} type="checkbox" {...props} />
      <label htmlFor={id}>{label}</label>
    </StyledCheckboxContainer>
  );
}
