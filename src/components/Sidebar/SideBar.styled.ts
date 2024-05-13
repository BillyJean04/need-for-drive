import styled from "styled-components";

export const StyledSidebar = styled.div<{ $isMainPage: boolean }>`
  display: none;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  height: 100%;
  background-color: #151b1f;
  width: 64px;
  position: ${({ $isMainPage }) => ($isMainPage ? "fixed" : "relative")};

  @media (min-width: ${({ theme }) => theme.device.mobileL}) {
    display: flex;
  }
  span {
    @media (min-width: ${({ theme }) => theme.device.mobileL}) {
      padding-bottom: 31px;
      color: ${({ theme }) => theme.colors.primary};
      font-weight: bold;
    }
  }
`;
