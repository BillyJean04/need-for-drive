import { OrderContent } from "@/components";
import { useOrderPageData } from "@/hooks/useOrderPageData";
import { StyledOrderPageContainer } from "@/pages/OrderPage/OrderPage.styled";

export function OrderPage() {
  useOrderPageData();

  return (
    <StyledOrderPageContainer>
      <h2>Ваш заказ подтверждён</h2>
      <OrderContent />
    </StyledOrderPageContainer>
  );
}
