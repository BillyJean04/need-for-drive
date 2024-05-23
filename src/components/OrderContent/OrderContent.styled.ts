import styled from "styled-components";

import mixins from "@/styles/mixins";

export const StyledOrderContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.device.mobileM}) {
    flex-direction: column-reverse;
  }

  img {
    width: 256px;
    height: 116px;
    object-fit: contain;
  }
`;

export const StyledOrderContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  h4 {
    ${mixins.textMixin({ $color: "black", $fontWeight: 400, $fontSize: "font-18" })};
  }
`;

export const StyledCarNumber = styled.div`
  display: flex;
  align-self: flex-start;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  padding: 4px 8px;

  ${mixins.textMixin({ $color: "black", $fontWeight: 400, $fontSize: "font-14" })};
`;

export const StyledOptionContainer = styled.div`
  span {
    ${mixins.textMixin({ $color: "black", $fontWeight: 700, $fontSize: "font-14" })};
  }

  span:last-child {
    ${mixins.textMixin({ $color: "black", $fontWeight: 300, $fontSize: "font-14" })};
  }
`;
