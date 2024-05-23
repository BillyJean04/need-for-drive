import { useLoaderData } from "react-router-dom";

import { useAppDispatch } from "@/hooks/index";
import { setCity, setPoint } from "@/redux/slices/location/locationSlice";
import { setModel } from "@/redux/slices/model/modelSlice";
import {
  setAdditionalOption,
  setDateFrom,
  setDateTo,
  setDuration,
  setPrice,
} from "@/redux/slices/optional/optionalSlice";
import { OrderApi } from "@/types/api";
import { calculateTimeDifference } from "@/utils";

export function useOrderPageData() {
  const { data: order } = useLoaderData() as OrderApi;

  const dispatch = useAppDispatch();
  const { days, hours, minutes } = calculateTimeDifference(
    new Date(Number(order.dateFrom)),
    new Date(Number(order.dateTo)),
  );

  dispatch(
    setModel({
      name: order.carId.name,
      id: order.carId.id,
      colors: order.carId.colors,
      img: order.carId.thumbnail.path,
      priceMax: order.carId.priceMax ?? 0,
      priceMin: order.carId.priceMin ?? 0,
    }),
  );

  dispatch(setCity({ id: order.cityId.id, name: order.cityId.name }));
  dispatch(setPoint({ id: order.pointId.id, address: order.pointId.address }));
  dispatch(setDuration(`${days} ${hours} ${minutes}`));
  dispatch(setPrice(order.price));
  dispatch(setDateFrom(Number(order.dateFrom)));
  dispatch(setDateTo(Number(order.dateTo)));
  dispatch(setAdditionalOption({ option: "isFullTank", value: !order.isFullTank }));
  dispatch(setAdditionalOption({ option: "isNeedChildChair", value: !order.isNeedChildChair }));
  dispatch(setAdditionalOption({ option: "isRightWheel", value: !order.isRightWheel }));
}
