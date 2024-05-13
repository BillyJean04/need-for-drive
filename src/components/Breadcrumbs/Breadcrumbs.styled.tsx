import styled from "styled-components";

import mixins from "@/styles/mixins";

export const StyledBreadcrumbs = styled.nav`
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding: 8px 0;

  width: 100%;

  ul {
    max-width: 1376px;
    margin: 0 auto;
    display: flex;
    padding: 0 32px;
    column-gap: 16px;
    row-gap: 4px;
    flex-wrap: wrap;
    ${mixins.textMixin({ $fontWeight: 700, $color: "gray" })};
  }
`;

export const StyledBreadcrumbContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;

  &:nth-last-of-type(1) {
    svg {
      display: none;
    }
  }
`;
