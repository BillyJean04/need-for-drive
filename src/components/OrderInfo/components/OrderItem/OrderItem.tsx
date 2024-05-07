import {
  StyledDots,
  StyledItem,
  StyledOrderItem,
  StyledOrderItemContainer,
  StyledStep,
} from "@/components/OrderInfo/components/OrderItem/OrderItem.styled";

interface OrderItemProps {
  item: string | boolean;
  step: string;
}

function transformItem(item: string | boolean) {
  if (typeof item === "string") {
    return item.split("/").map((value) => <span key={value}>{value}</span>);
  }

  return <span>{item ? "Да" : "Нет"}</span>;
}

export function OrderItem({ item, step }: OrderItemProps) {
  if (!item) {
    return null;
  }

  return (
    <StyledOrderItemContainer>
      <StyledStep>{step}</StyledStep>
      <StyledDots />
      <StyledOrderItem />
      <StyledItem>{transformItem(item)}</StyledItem>
    </StyledOrderItemContainer>
  );
}
