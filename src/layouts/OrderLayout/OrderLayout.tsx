import { Outlet } from "react-router-dom";

import { Breadcrumbs, Header, Menu, OrderInfo, Sidebar } from "@/components";
import { useGuard } from "@/hooks/useGuard";
import {
  StyledOrderContentContainer,
  StyledOrderHeader,
  StyledOrderLayout,
  StyledOrderLayoutContent,
} from "@/layouts/OrderLayout/OrderLayout.styled";

export function OrderLayout() {
  useGuard();

  return (
    <StyledOrderLayout>
      <Sidebar />
      <Menu />
      <StyledOrderLayoutContent>
        <StyledOrderHeader>
          <Header />
        </StyledOrderHeader>
        <Breadcrumbs />
        <StyledOrderContentContainer>
          <Outlet />
          <OrderInfo />
        </StyledOrderContentContainer>
      </StyledOrderLayoutContent>
    </StyledOrderLayout>
  );
}
