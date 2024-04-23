import styled from "styled-components";

import Image from "../../assets/back.png";

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

export const StyledMenu = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: flex-start;
  background: url(${Image}) no-repeat;
  background-size: cover;
  transform: ${({ $isOpen }) => ($isOpen ? "translateX(0)" : "translateX(-150%)")};
  height: 100vh;
  width: 100%;
  text-align: left;
  padding-top: 80px;
  padding-left: 28px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  transition: transform 0.3s ease-in-out;

  @media (min-width: ${({ theme }) => theme.device.mobileL}) {
    justify-content: center;
    padding-left: 128px;
  }

  span {
    display: inline-block;

    a {
      display: inline-block;
      font-size: 22px;
      text-transform: uppercase;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.white};
      text-decoration: none;
      transition: color 0.3s linear;

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }

      @media (min-width: ${({ theme }) => theme.device.mobileL}) {
        font-size: 28px;
      }

      @media (min-width: ${({ theme }) => theme.device.tablet}) {
        font-size: 32px;
      }
    }
  }
`;

export const StyledSocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 13px;
  gap: 24px;
`;
