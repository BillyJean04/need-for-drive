import styled from "styled-components";

import mixins from "@/styles/mixins";

export const StyledHeaderContainer = styled.header<{ $isLayout?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 8px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.device.mobileL}) {
    padding: ${({ $isLayout }) => $isLayout && "32px 32px 32px 128px"};
  }

  padding: 16px;

  @media (min-width: ${({ theme }) => theme.device.mobileL}) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
    padding: 0;
    align-items: baseline;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    ${mixins.textMixin({ $fontWeight: "bold", $color: "primary", $fontSize: "font-30" })};
  }

  div {
    display: flex;
    align-items: center;
    gap: 7px;

    span {
      ${mixins.textMixin({ $color: "gray", $fontSize: "font-14" })};
    }
  }
`;
