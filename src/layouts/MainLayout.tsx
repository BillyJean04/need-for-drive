import { PropsWithChildren } from "react";

import { BurgerMenu, Menu } from "@/components";

export interface MainLayoutProps extends PropsWithChildren {}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Menu />
      <BurgerMenu />
      {children}
    </>
  );
}
