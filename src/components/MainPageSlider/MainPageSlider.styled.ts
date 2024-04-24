import styled from "styled-components";

export const StyledMainPageSliderContainer = styled.div`
  display: none;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.device.laptop}) {
    display: block;
    width: 100%;
  }
`;

export const StyledMainPageSliderContent = styled.div`
  position: absolute;
  display: flex;
  height: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 100px;

  h2 {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    font-size: 40px;
    padding-bottom: 8px;
  }
  p {
    color: ${({ theme }) => theme.colors.lightGray};
    font-weight: 300;
    font-size: 24px;
    padding-bottom: 34px;
  }
`;

export const StyledSliderImage = styled.div`
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
