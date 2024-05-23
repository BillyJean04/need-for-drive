import { useMutation } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

import { ConfirmModal } from "@/components/ConfirmModal";
import { OrderItem } from "@/components/OrderInfo/components/OrderItem";
import { orderInfoSteps } from "@/components/OrderInfo/consts";
import { StyledOrderInfo } from "@/components/OrderInfo/OrderInfo.styled";
import { Button } from "@/components/ui";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useFormatedOrderData } from "@/hooks/useFormatedOrderData";
import { useNavigateTo } from "@/hooks/useNavigateTo";
import { useOrderDataIsFilled } from "@/hooks/useOrderDataFilled";
import { useOrderPage } from "@/hooks/useOrderPage";
import { deleteCity } from "@/redux/slices/location/locationSlice";
import { deleteModel } from "@/redux/slices/model/modelSlice";
import { deleteAllOptions } from "@/redux/slices/optional/optionalSlice";
import { getOrderInfoData } from "@/redux/store";
import { formatNumber } from "@/utils";
import { routesPathsNames } from "@/utils/consts/routesPathsNames";
import { Urls } from "@/utils/consts/urls";
import { fetcher } from "@/utils/fetcher";

export function OrderInfo() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const orderInfo = useAppSelector(getOrderInfoData);
  const { priceMin, priceMax } = useAppSelector((state) => state.model);
  const price = useAppSelector((state) => state.optional.price);
  const { nextPathname, buttonText } = useNavigateTo();
  const currentStepIsFilled = useOrderDataIsFilled();
  const formatedOrderData = useFormatedOrderData();
  const { isOrderPage, orderId } = useOrderPage();

  const { locationPagePath, totalPagePath } = routesPathsNames;

  const isButtonDisabled =
    nextPathname !== locationPagePath &&
    !currentStepIsFilled &&
    pathname !== totalPagePath &&
    !isOrderPage;

  const isTotalPage = pathname === totalPagePath;

  const dispatch = useAppDispatch();

  const { mutate: createOrder, isPending: isOrderCreating } = useMutation({
    mutationFn: (newOrder: string) => fetcher(Urls.order, { method: "POST", body: newOrder }),
    onSuccess: (order) => {
      toast.success("Заказ успешно создан");
      navigate(`/order/${order?.data?.id}`);
    },
    onError: () => toast.error("Не удалось создать заказ"),
  });
  const { mutate: deleteOrder, isPending: isOrderDeleting } = useMutation({
    mutationFn: (id: string) => fetcher(Urls.order, { method: "DELETE", params: id }),
    onSuccess: () => {
      dispatch(deleteCity());
      dispatch(deleteModel());
      dispatch(deleteAllOptions());
      toast.success("Заказ успешно отменен");
      navigate("/location");
    },
    onError: () => toast.error("Не удалось удалить заказ"),
  });

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

  const handleClick = () => {
    if (isTotalPage) {
      setShowModal(true);
    } else if (isOrderPage && orderId) {
      deleteOrder(orderId);
    } else {
      navigate(nextPathname);
    }
  };

  const handleCreateOrder = () => {
    createOrder(formatedOrderData);
    setShowModal(false);
  };

  return (
    <>
      <ConfirmModal
        handleClickSubmitButton={handleCreateOrder}
        handleClickCancelButton={() => setShowModal(false)}
        isPending={isOrderCreating}
        isOpen={showModal}
      />
      <StyledOrderInfo>
        <h3>Ваш заказ:</h3>
        <div>{orderItem}</div>
        {shouldShowPrice && (
          <div>{`Цена: ${price === 0 ? formatedPrice : formatNumber(price)} ₽`}</div>
        )}
        <Button
          onClick={handleClick}
          $isLarge
          $color={isOrderPage ? "red" : "lightGreen"}
          isLoading={isOrderDeleting}
          disabled={isButtonDisabled}
        >
          {isOrderPage ? "Отменить" : buttonText}
        </Button>
      </StyledOrderInfo>
    </>
  );
}
