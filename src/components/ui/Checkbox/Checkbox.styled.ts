import styled from "styled-components";

import mixins from "@/styles/mixins";

export const StyledCheckboxContainer = styled.div<{ $checked?: boolean; $disabled?: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 13px;

  label {
    ${mixins.textMixin({ $fontWeight: 300, $fontSize: "font-14", $color: "gray" })};
    color: ${({ theme, $checked }) => $checked && theme.colors.black};
    color: ${({ theme, $disabled }) => $disabled && theme.colors.lightGray};
    cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  }

  input {
    cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
    border-color: ${({ theme, $disabled }) => $disabled && theme.colors.lightGray};

    &:before {
      border: 2px solid
        ${({ theme, $disabled }) => ($disabled ? theme.colors.lightGray : theme.colors.gray)};
    }
  }
`;

export const StyledCheckbox = styled.input`
  position: relative;
  margin: 0;
  cursor: pointer;

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 12px;
    height: 12px;
    top: 0;
    left: 0;
    border: 2px solid ${({ theme }) => theme.colors.gray};
    background-color: ${({ theme }) => theme.colors.white};
  }

  &:checked:after {
    content: "";
    display: block;
    width: 5px;
    height: 12px;
    border: solid ${({ theme }) => theme.colors.black};
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
    position: absolute;
    top: -3px;
    left: 8px;
  }

  &:checked:before {
    content: "";
    display: block;
    position: absolute;
    width: 12px;
    height: 12px;
    top: 0;
    left: 0;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
