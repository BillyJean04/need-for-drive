import styled from "styled-components";

export const StyledBurgerContainer = styled.div`
  z-index: 100;
  margin-left: 20px;
  position: absolute;

  @media (min-width: ${({ theme }) => theme.device.mobileL}) {
    margin-left: 16px;
  }
`;

export const StyledBurger = styled.button<{ $isOpen: boolean }>`
  margin-top: 20px;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 11;

  @media (min-width: ${({ theme }) => theme.device.mobileL}) {
    margin-top: 40px;
  }

  span {
    width: 2.1rem;
    height: 0.25rem;
    background: ${({ theme, $isOpen }) => ($isOpen ? theme.colors.white : theme.colors.black)};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    @media (min-width: ${({ theme }) => theme.device.mobileL}) {
      background: ${({ theme }) => theme.colors.white};
    }

    &:first-child {
      transform: ${({ $isOpen }) => ($isOpen ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
      transform: ${({ $isOpen }) => ($isOpen ? "translateX(20px)" : "translateX(0)")};
    }

    &:nth-child(3) {
      transform: ${({ $isOpen }) => ($isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
