import styled from "styled-components";

import mixins from "@/styles/mixins";

export const StyledOrderPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 32px;
  padding-left: 32px;
  width: 60%;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    width: 100%;
  }

  h2 {
    ${mixins.textMixin({ $fontSize: "font-24", $fontWeight: 400, $color: "black" })};
  }
`;
