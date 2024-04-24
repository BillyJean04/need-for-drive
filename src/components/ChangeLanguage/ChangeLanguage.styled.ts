import styled from "styled-components";

export const StyledChangeLanguageContainer = styled.div<{ $isOpen?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 15px;

  @media (max-width: ${({ theme }) => theme.device.mobileL}) {
    height: 100%;
  }

  @media (max-width: ${({ theme }) => theme.device.mobileL}) {
    padding-bottom: 15px;
  }

  button {
    display: ${({ $isOpen }) => ($isOpen ? "none" : "block")};
    background: none;
    border: 1px solid transparent;
    border-radius: 50%;
    color: #0ec261;
    font-size: 13px;
    font-weight: 700;
    padding: 16px 12px;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
      border-color: ${({ theme }) => theme.colors.white};
    }
  }

  button {
    @media (max-width: ${({ theme }) => theme.device.mobileL}) {
      display: block;
      align-self: flex-start;
    }
  }
`;
