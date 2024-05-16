import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { OrderItem } from "@/components/OrderInfo/components/OrderItem";
import { orderInfoSteps } from "@/components/OrderInfo/consts";
import { StyledOrderInfo } from "@/components/OrderInfo/OrderInfo.styled";
import { Button } from "@/components/ui";
import { useAppSelector } from "@/hooks";
import { useNavigateTo } from "@/hooks/useNavigateTo";
import { useOrderDataIsFilled } from "@/hooks/useOrderDataFilled";
import { getOrderInfoData } from "@/redux/store";
import { formatNumber } from "@/utils";
import { routesPathsNames } from "@/utils/consts/routesPathsNames";

export function OrderInfo() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { nextPathname, buttonText } = useNavigateTo();

  const orderInfo = useAppSelector(getOrderInfoData);
  const { priceMin, priceMax } = useAppSelector((state) => state.model);
  const currentStepIsFilled = useOrderDataIsFilled();

  const { locationPagePath } = routesPathsNames;

  const isButtonDisabled = nextPathname !== locationPagePath && !currentStepIsFilled;

  const orderItem = useMemo(
    () =>
      Object.entries(orderInfo).map(([key, item], id) => {
        if (typeof item === "object") {
          return Object.entries(item).map(([subItemKey, subItem], subitemId) => (
            <OrderItem key={subItemKey} step={orderInfoSteps[subitemId + 2]} item={subItem} />
          ));
        }
        return <OrderItem key={key} step={orderInfoSteps[id]} item={item} />;
      }),
    [orderInfo],
  );

  const formatedPrice =
    priceMin && priceMax ? `от ${formatNumber(priceMin)} до ${formatNumber(priceMax)}` : 0;

  const shouldShowPrice = pathname !== "/location" || !!Object.values(orderInfo)[1];

  return (
    <StyledOrderInfo>
      <h3>Ваш заказ:</h3>
      <div>{orderItem}</div>
      {shouldShowPrice && <div>{`Цена: ${formatedPrice} ₽`}</div>}
      <Button
        onClick={() => navigate(nextPathname)}
        $isLarge
        $color="lightGreen"
        disabled={isButtonDisabled}
      >
        {buttonText}
      </Button>
    </StyledOrderInfo>
  );
}
