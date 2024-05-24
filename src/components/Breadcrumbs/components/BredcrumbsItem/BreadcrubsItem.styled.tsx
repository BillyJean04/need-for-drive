import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledBreadcrumbsItem = styled(NavLink)<{
  $isFilled: boolean;
  $prevIsFilled: boolean;
  $isFirstItem: boolean;
}>`
  display: flex;
  text-decoration: none;

  color: ${({ $isFilled, $prevIsFilled, theme, $isFirstItem }) =>
    $isFilled || $prevIsFilled || $isFirstItem ? theme.colors.black : theme.colors.gray};

  pointer-events: ${({ $isFilled, $prevIsFilled, $isFirstItem }) =>
    $isFilled || $prevIsFilled || $isFirstItem ? "auto" : "none"};
`;
