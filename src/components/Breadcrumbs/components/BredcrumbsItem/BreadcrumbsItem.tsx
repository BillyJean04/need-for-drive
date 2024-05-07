import { StyledBreadcrumbsItem } from "@/components/Breadcrumbs/components/BredcrumbsItem/BreadcrubsItem.styled";
import { useAppSelector } from "@/hooks";
import { getOrderInfoData } from "@/redux/store";
import { objectValuesIsFilled } from "@/utils";

interface BreadcrumbsItemProps {
  name: string;
  href: string;
  index: number;
}

export function BreadcrumbsItem({ name, href, index }: BreadcrumbsItemProps) {
  const orderInfo = useAppSelector(getOrderInfoData);
  const orderInfoIsObject = (propertyIndex: number) =>
    typeof Object.values(orderInfo)[propertyIndex] === "object";

  let currentStepIsFilled = !!Object.values(orderInfo)[index];
  const previousStepIsFilled = !!Object.values(orderInfo)[index - 1];

  if (orderInfoIsObject(index)) {
    currentStepIsFilled = objectValuesIsFilled(
      Object.values(orderInfo)[index] as Record<string, string | boolean>,
    );
  }

  return (
    <StyledBreadcrumbsItem
      style={({ isActive }) => ({
        color: isActive ? "#0EC261" : "",
      })}
      $isFirstItem={index === 0}
      $prevIsFilled={
        orderInfoIsObject(index - 1)
          ? objectValuesIsFilled(
              Object.values(orderInfo)[index - 1] as Record<string, string | boolean>,
          )
          : previousStepIsFilled
      }
      $isFilled={currentStepIsFilled}
      to={href}
    >
      {name}
    </StyledBreadcrumbsItem>
  );
}
