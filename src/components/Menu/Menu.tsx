import { useState } from "react";

import { ChangeLanguage } from "@/components";
import {
  StyledBurger,
  StyledBurgerContainer,
  StyledMenu,
  StyledMenuBlur,
  StyledSocialIcons,
} from "@/components/Menu/Menu.styled";

import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Telegram from "../../assets/telegram.svg";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StyledBurgerContainer>
        <StyledBurger $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </StyledBurger>
      </StyledBurgerContainer>
      <StyledMenu $isOpen={isOpen}>
        <span aria-hidden="true">
          <a href="/">ПАРКОВКА</a>
        </span>
        <span>
          <a href="/">СТРАХОВКА</a>
        </span>
        <span>
          <a href="/">
            <span>БЕНЗИН</span>
          </a>
        </span>
        <span>
          <a href="/">ОБСЛУЖИВАНИЕ</a>
        </span>
        <StyledSocialIcons>
          <span>
            <a href="/">
              <Telegram style={{ cursor: "pointer" }} width={32} height={32} />
            </a>
          </span>
          <span>
            <a href="/">
              <Facebook style={{ cursor: "pointer" }} width={32} height={32} />
            </a>
          </span>
          <span>
            <a href="/">
              <Instagram style={{ cursor: "pointer" }} width={32} height={32} />
            </a>
          </span>
        </StyledSocialIcons>
        <ChangeLanguage $isOpen={isOpen} />
      </StyledMenu>
      <StyledMenuBlur $isOpen={isOpen} />
    </>
  );
}
