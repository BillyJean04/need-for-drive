import styled from "styled-components";

import mixins from "@/styles/mixins";

export const StyledOrderNumberContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

export const StyledOrderNumberWrapper = styled.div`
  max-width: 1376px;
  margin: 0 auto;
  display: flex;
  padding: 0 32px;
  column-gap: 16px;
  row-gap: 4px;
  flex-wrap: wrap;

  span {
    padding: 8px 0;
    ${mixins.textMixin({ $fontSize: "font-14", $fontWeight: 700, $color: "black" })};
  }
`;
