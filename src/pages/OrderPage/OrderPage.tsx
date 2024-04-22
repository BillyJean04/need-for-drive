import { BurgerMenu, Header, Menu } from "@/components";
import { StyledOrderPage } from "@/pages/OrderPage/OrderPage.styled";

export default function OrderPage() {
  return (
    <>
      <BurgerMenu />
      <Menu />
      <StyledOrderPage>
        <Header />
        <span>Оформления заказа</span>
      </StyledOrderPage>
    </>
  );
}
