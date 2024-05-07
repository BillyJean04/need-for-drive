import styled from "styled-components";

export const StyledMapContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 70%;
  max-width: 700px;
  width: 100%;
  padding-right: 20px;

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    display: none;
  }
`;
