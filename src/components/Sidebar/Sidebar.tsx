import { useLocation } from "react-router-dom";

import { ChangeLanguage } from "@/components";
import { StyledSidebar } from "@/components/Sidebar/SideBar.styled";

export function Sidebar() {
  const location = useLocation();

  return (
    <StyledSidebar $isMainPage={location.pathname === "/"}>
      <ChangeLanguage />
    </StyledSidebar>
  );
}
