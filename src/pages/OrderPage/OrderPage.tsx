import { Header, Menu } from "@/components";
import { StyledOrderPage } from "@/pages/OrderPage/OrderPage.styled";

export default function OrderPage() {
  return (
    <>
      <Menu />
      <StyledOrderPage>
        <Header />
        <span>Оформления заказа</span>
      </StyledOrderPage>
    </>
  );
}
