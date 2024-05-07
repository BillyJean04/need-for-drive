import { ButtonHTMLAttributes, ReactNode } from "react";

import Loading from "@/assets/loading.svg";
import { StyledButton } from "@/components/ui/Button/Button.styled";
import { ButtonColors } from "@/types";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  $color?: ButtonColors;
  $isLarge?: boolean;
  isLoading?: boolean;
}

export function Button({ $color, $isLarge = false, isLoading, children, ...props }: ButtonProps) {
  return (
    <StyledButton $color={$color} $isLarge={$isLarge} {...props}>
      {isLoading ? <Loading /> : children}
    </StyledButton>
  );
}
