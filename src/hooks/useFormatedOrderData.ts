import { useAppSelector } from "@/hooks/index";

export function useFormatedOrderData() {
  const { city, point } = useAppSelector((state) => state.location);
  const { id } = useAppSelector((state) => state.model);
  const { color, dateFrom, dateTo, rate, isFullTank, isNeedChildChair, isRightWheel, price } =
    useAppSelector((state) => state.optional);

  return JSON.stringify({
    cityId: { ...city },
    pointId: { ...point },
    carId: { id },
    color,
    dateFrom,
    dateTo,
    rateId: { id: rate.id },
    isFullTank,
    isNeedChildChair,
    isRightWheel,
    price,
  });
}
