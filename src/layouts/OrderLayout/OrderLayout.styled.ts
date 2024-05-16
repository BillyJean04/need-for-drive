import styled from "styled-components";

export const StyledOrderLayout = styled.div`
  display: flex;
  flex-direction: row;
  height: 100dvh;
`;

export const StyledOrderLayoutContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledOrderContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 1376px;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.device.tablet}) {
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.device.laptopL}) {
    overflow-y: scroll;
  }
`;

export const StyledOrderHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1376px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.device.mobileL}) {
    padding: 32px 32px 32px 32px;
  }
`;
