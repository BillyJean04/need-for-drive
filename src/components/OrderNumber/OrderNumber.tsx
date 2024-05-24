import {
  StyledOrderNumberContainer,
  StyledOrderNumberWrapper,
} from "@/components/OrderNumber/OrderNumber.styled";
import { useOrderPage } from "@/hooks/useOrderPage";

export function OrderNumber() {
  const { orderId } = useOrderPage();

  return (
    <StyledOrderNumberContainer>
      <StyledOrderNumberWrapper>
        <span>Номер заказа {orderId}</span>
      </StyledOrderNumberWrapper>
    </StyledOrderNumberContainer>
  );
}
