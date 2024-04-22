import styled from "styled-components";

import Image from "../../assets/back.png";

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
