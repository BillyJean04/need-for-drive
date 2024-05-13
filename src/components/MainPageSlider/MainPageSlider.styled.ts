import styled from "styled-components";

import mixins from "@/styles/mixins";

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
    ${mixins.textMixin({ $color: "white", $fontSize: "font-40" })};
    padding-bottom: 8px;
  }
  p {
    ${mixins.textMixin({ $color: "lightGray", $fontWeight: "light", $fontSize: "font-24" })};
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
