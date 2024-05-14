import styled from "styled-components";

import mixins from "@/styles/mixins";

export const StyledCarCardContainer = styled.div<{ $isActive: boolean }>`
  display: flex;
  gap: 36px;
  flex-direction: column;
  padding: 16px;
  border: 1px solid
    ${({ theme, $isActive }) => ($isActive ? theme.colors.primary : theme.colors.lightGray)};
  transition: border-color ease-in-out 0.1s;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    padding-right: 8px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &:hover {
    border: 1px solid
      ${({ theme, $isActive }) => ($isActive ? theme.colors.primary : theme.colors.gray)};
  }
`;

export const StyledTextContainer = styled.div`
  h4 {
    ${mixins.textMixin({ $color: "black", $fontWeight: 400, $fontSize: "font-18" })};
  }

  span {
    ${mixins.textMixin({ $color: "gray", $fontWeight: 400, $fontSize: "font-14" })};
  }
`;

export const StyledImageContainer = styled.div`
  width: 256px;
  height: 116px;
  align-self: flex-end;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
