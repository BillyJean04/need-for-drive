import styled from "styled-components";

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
    font-size: 14px;
  }

  input {
    cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "normal")};
    outline: none;
    color: ${({ theme }) => theme.colors.black};
    font-size: 14px;
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
