import styled from "styled-components";

export const StyledTotalPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 32px;
  padding-left: 32px;

  width: 60%;

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    width: 100%;
  }
`;
