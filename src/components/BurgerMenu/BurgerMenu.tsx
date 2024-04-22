import { useContext } from "react";

import { StyledBurger, StyledBurgerContainer } from "@/components/BurgerMenu/BurgerMenu.styled";
import { MenuContext } from "@/context/MenuContext";

export function BurgerMenu() {
  const { isOpen, setIsOpen } = useContext(MenuContext);

  return (
    <StyledBurgerContainer>
      <StyledBurger $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </StyledBurger>
    </StyledBurgerContainer>
  );
}
