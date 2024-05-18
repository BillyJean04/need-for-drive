import styled from "styled-components";

import mixins from "@/styles/mixins";

export const StyledOptionalPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 32px;
  padding-left: 32px;
  gap: 32px;
`;

export const StyledOptionalLabel = styled.span`
  ${mixins.textMixin({ $color: "black", $fontWeight: 300, $fontSize: "font-14" })};
`;
