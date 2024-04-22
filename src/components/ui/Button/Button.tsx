import { ButtonHTMLAttributes, ReactNode } from "react";

import Loading from "@/assets/loading.svg";
import { StyledButton } from "@/components/ui/Button/Button.styled";
import { ButtonColors } from "@/types";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  $color?: ButtonColors;
  isLoading?: boolean;
}

export function Button({ $color, isLoading, children, ...props }: ButtonProps) {
  return (
    <StyledButton $color={$color} {...props}>
      {isLoading ? <Loading /> : children}
    </StyledButton>
  );
}

Button.defaultProps = {
  $color: "green",
  isLoading: false,
};
