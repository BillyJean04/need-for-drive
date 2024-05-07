import styled from "styled-components";

export const StyledBreadcrumbs = styled.nav`
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding: 8px 0;

  width: 100%;
  ul {
    max-width: 1376px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    padding: 0 32px;
    color: ${({ theme }) => theme.colors.gray};
    column-gap: 16px;
    row-gap: 4px;
    flex-wrap: wrap;
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
