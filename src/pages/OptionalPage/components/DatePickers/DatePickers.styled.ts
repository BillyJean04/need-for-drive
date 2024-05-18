import styled from "styled-components";

import mixins from "@/styles/mixins";

export const StyledOptionalDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    align-items: flex-start;
  }
`;

export const StyledOptionalDatePickers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: flex-start;
  gap: 13px;

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    position: relative;
  }
`;

export const StyledDatePickerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  span {
    ${mixins.textMixin({ $fontWeight: 300, $color: "black", $fontSize: "font-14" })};
  }

  input {
    outline: none;
    ${mixins.textMixin({ $fontWeight: 300, $color: "black", $fontSize: "font-14" })};
    padding: 3px 8px;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }

  (.react-datepicker__close-icon:after) {
    color: $black !important;
    border: none !important;
    background-color: transparent !important;
    content: "✖" !important;
  }
`;
