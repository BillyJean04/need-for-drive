import styled from "styled-components";

import { ButtonColors } from "@/types";

export const StyledButton = styled.button<{ $color?: ButtonColors; $isLarge: boolean }>`
  display: flex;
  justify-content: center;
  border: none;
  padding: 15px ${({ $isLarge }) => ($isLarge ? "0" : "60px")};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ $color, theme }) => ($color ? theme.gradients[$color] : theme.gradients.green)};
  font-weight: 500;
  font-size: 18px;
  border-radius: 8px;
  width: 100%;

  &:hover {
    background: linear-gradient(90deg, rgba(11, 147, 74, 1) 0%, rgba(2, 110, 71, 1) 100%);
  }

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
