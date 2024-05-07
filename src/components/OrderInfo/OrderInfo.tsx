import { useNavigate } from "react-router-dom";

import { OrderItem } from "@/components/OrderInfo/components/OrderItem";
import { orderInfoSteps } from "@/components/OrderInfo/consts";
import { StyledOrderInfo } from "@/components/OrderInfo/OrderInfo.styled";
import { Button } from "@/components/ui";
import { useAppSelector } from "@/hooks";
import { useNavigateTo } from "@/hooks/useNavigateTo";
import { useOrderDataIsFilled } from "@/hooks/useOrderDataFilled";
import { getOrderInfoData } from "@/redux/store";
import { routesPathsNames } from "@/utils/consts/routesPathsNames";

export function OrderInfo() {
  const navigate = useNavigate();
  const { nextPathname, buttonText } = useNavigateTo();

  const orderInfo = useAppSelector(getOrderInfoData);
  const currentStepIsFilled = useOrderDataIsFilled();

  const { locationPagePath } = routesPathsNames;

  return (
    <StyledOrderInfo>
      <h3>Ваш заказ:</h3>
      <div>
        {Object.entries(orderInfo).map(([key, item], id) => {
          if (typeof item === "object") {
            return Object.entries(item).map(([subItemKey, subItem], subitemId) => (
              <OrderItem key={subItemKey} step={orderInfoSteps[subitemId + 2]} item={subItem} />
            ));
          }
          return <OrderItem key={key} step={orderInfoSteps[id]} item={item} />;
        })}
      </div>
      <Button
        onClick={() => navigate(nextPathname)}
        $isLarge
        $color="lightGreen"
        disabled={nextPathname !== locationPagePath && !currentStepIsFilled}
      >
        {buttonText}
      </Button>
    </StyledOrderInfo>
  );
}