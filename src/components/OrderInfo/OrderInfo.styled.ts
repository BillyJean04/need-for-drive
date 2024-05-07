import styled from "styled-components";

export const StyledOrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${({ theme }) => theme.colors.lightGray};
  width: 100%;
  gap: 32px;

  @media (min-width: ${({ theme }) => theme.device.tablet}) {
    width: 30%;
  }

  @media (min-width: ${({ theme }) => theme.device.mobileL}) {
    padding: 32px 32px 32px 32px;
  }

  @media (max-height: 500px) {
    height: 100dvh;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    align-self: flex-end;
  }

  @media (min-width: ${({ theme }) => theme.device.mobileL}) {
    padding: 32px 32px 32px 32px;
  }

  @media (max-width: 1200px) {
    padding: 32px 32px 10px 32px;
  }
`;
