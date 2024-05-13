import styled from "styled-components";

import mixins from "@/styles/mixins";
import { ButtonColors } from "@/types";

export const StyledButton = styled.button<{
  $color?: ButtonColors;
  $isLarge: boolean;
  $disabled: boolean;
}>`
  display: flex;
  justify-content: center;
  border: none;
  padding: 15px ${({ $isLarge }) => ($isLarge ? "0" : "60px")};
  cursor: pointer;
  background: ${({ $color, theme }) => $color && theme.gradients[$color]};
  width: 100%;
  border-radius: 8px;
  position: relative;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ $disabled, theme, $color }) =>
      !$disabled && $color ? theme.hoverGradients.lightGreen : ""};
    opacity: 0;
    transition: opacity 0.3s;
    z-index: -1;
    border-radius: 8px;
  }

  &:hover::before {
    opacity: 1;
  }

  ${mixins.textMixin({ $color: "white", $fontSize: "font-18" })};

  &:active {
    background: linear-gradient(90deg, rgba(7, 100, 50, 1) 0%, rgba(1, 60, 39, 1) 100%);
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.lightGray};
    cursor: not-allowed;
  }

  @media (min-width: ${({ theme }) => theme.device.mobileL}) {
    width: auto;
  }

  svg {
    animation: spin 2s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
