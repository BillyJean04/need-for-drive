import { Outlet } from "react-router-dom";

import { Breadcrumbs, Header, Menu, OrderInfo, OrderNumber, Sidebar } from "@/components";
import { useGuard } from "@/hooks/useGuard";
import { useOrderPage } from "@/hooks/useOrderPage";
import {
  StyledOrderContentContainer,
  StyledOrderHeader,
  StyledOrderLayout,
  StyledOrderLayoutContent,
} from "@/layouts/OrderLayout/OrderLayout.styled";

export function OrderLayout() {
  const { isOrderPage } = useOrderPage();

  useGuard();

  return (
    <StyledOrderLayout>
      <Sidebar />
      <Menu />
      <StyledOrderLayoutContent>
        <StyledOrderHeader>
          <Header />
        </StyledOrderHeader>
        {isOrderPage ? <OrderNumber /> : <Breadcrumbs />}
        <StyledOrderContentContainer>
          <Outlet />
          <OrderInfo />
        </StyledOrderContentContainer>
      </StyledOrderLayoutContent>
    </StyledOrderLayout>
  );
}
