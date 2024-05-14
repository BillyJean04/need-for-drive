import styled from "styled-components";

import mixins from "@/styles/mixins";

export const LocationPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 32px;
  padding-left: 32px;
  gap: 48px;
  align-items: flex-start;
  width: 70%;

  @media (max-height: 500px) {
    height: 100dvh;
  }

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    padding-right: 32px;
    width: 100%;
  }
`;

export const StyledInputsContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;

export const StyledTypeheadContainer = styled.div<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 8px;

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    justify-content: flex-start;
  }

  label {
    font-size: ${({ theme }) => theme.fontSizes["font-14"]};
  }

  input {
    cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "auto")};
    outline: none;
    ${mixins.textMixin({ $color: "black", $fontSize: "font-14" })};
    padding: 3px 8px;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }

  svg {
    height: 8px;
    width: 8px;
    cursor: pointer;
    pointer-events: all;
  }
`;

export const StyledError = styled.span`
  position: absolute;
  inset: 30px 0 20px 0;
  font-size: 12px;
  color: red;
`;
