import styled from "styled-components";

export const StyledMainPageContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.device.mobileL}) {
    padding: 32px 32px 32px 128px;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  padding: 30px 30px;
  flex-direction: column;
  height: 100%;
  align-items: flex-start;

  @media (min-width: ${({ theme }) => theme.device.mobileL}) {
    justify-content: center;
    padding: 0;
  }

  @media (min-width: ${({ theme }) => theme.device.laptop}) {
    padding-bottom: 163px;
  }

  @media (max-height: 624px) {
    padding-bottom: 0;
  }

  h1 {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    font-size: 32px;

    @media (min-width: ${({ theme }) => theme.device.mobileL}) {
      font-size: 55px;
    }

    @media (min-width: ${({ theme }) => theme.device.tablet}) {
      font-size: 70px;
    }

    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  p {
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 300;
    font-size: 18px;
    padding-top: 25px;
    padding-bottom: 60px;

    @media (min-width: ${({ theme }) => theme.device.mobileL}) {
      font-size: 26px;
    }
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  gap: 8px;
  font-size: 13px;
  font-weight: 400;
  padding: 16px;

  @media (min-width: ${({ theme }) => theme.device.mobileL}) {
    justify-content: space-between;
    flex-direction: row;
    align-items: baseline;
    padding: 0;
    background-color: transparent;
  }

  background-color: ${({ theme }) => theme.colors.black};

  @media (min-width: ${({ theme }) => theme.device.mobileL}) {
    padding: 0;
    background-color: transparent;
  }

  p {
    color: ${({ theme }) => theme.colors.lightGray};

    @media (min-width: ${({ theme }) => theme.device.mobileL}) {
      color: ${({ theme }) => theme.colors.gray};
    }
  }
  span {
    color: ${({ theme }) => theme.colors.primary};

    @media (min-width: ${({ theme }) => theme.device.mobileL}) {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;
