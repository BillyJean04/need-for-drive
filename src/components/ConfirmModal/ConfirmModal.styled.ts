import styled from "styled-components";

import mixins from "@/styles/mixins";

export const ConfirmModalContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  justify-content: center;
  place-items: center;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
`;

export const ConfirmModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const ConfirmModalTitle = styled.h2`
  ${mixins.textMixin({ $fontWeight: 400, $fontSize: "font-24" })};
`;

export const ConfirmModalButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  @media (max-width: 475px) {
    flex-direction: column;
  }
`;
