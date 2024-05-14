import styled from "styled-components";

import mixins from "@/styles/mixins";

export const StyledRadioButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  label {
    ${mixins.textMixin({ $fontWeight: 300, $color: "gray", $fontSize: "font-14" })};
    cursor: pointer;
  }
`;

export const StyledRadioButton = styled.input`
  width: 12px;
  height: 12px;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  margin: 0;

  &:checked {
    border: 3px solid ${({ theme }) => theme.colors.primary};
  }
`;
