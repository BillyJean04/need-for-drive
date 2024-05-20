import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

import { RadioButton } from "@/components/ui/RadioButton";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setPrice, setRate } from "@/redux/slices/optional/optionalSlice";
import { RatesApi } from "@/types/api";
import { convertedTimes, msInMonth, msInWeek } from "@/utils/consts/convertedTime";
import { Urls } from "@/utils/consts/urls";
import { fetcher } from "@/utils/fetcher";

import { StyledOptionalLabel } from "../../OptionalPage.styled";
import {
  StyledOptionalRateContainer,
  StyledRadioOptionalButtonsContainer,
} from "./RateRadioButtons.styled";

export function RateRadioButtons() {
  const {
    dateFrom,
    dateTo,
    rate,
    price: optionalPrice,
  } = useAppSelector((state) => state.optional);

  const { data: rates } = useQuery<RatesApi>({
    queryKey: ["rates"],
    queryFn: () => fetcher(Urls.rates, { method: "GET" }),
  });

  const dispatch = useAppDispatch();

  const rentalDuration = dateTo && dateFrom ? dateTo - dateFrom : 0;

  const formatedRates = useMemo(
    () =>
      rates?.data
        .sort((a, b) => Number(a.price) - Number(b.price))
        .map(({ price, rateTypeId: { id, name } }) => ({ id, price, name })),
    [rates?.data],
  );

  const disabledByRateTypeId: Record<number, boolean> = {
    1: rentalDuration < msInWeek || rentalDuration >= msInMonth || !rentalDuration,
    2: rentalDuration < msInMonth || !rentalDuration,
    3: rentalDuration >= msInWeek || !rentalDuration,
  };

  return (
    <StyledOptionalRateContainer>
      <StyledOptionalLabel>Тариф</StyledOptionalLabel>
      <StyledRadioOptionalButtonsContainer>
        {formatedRates?.map(({ id, name, price }, index) => (
          <RadioButton
            onChange={() => {
              const totalDaysCount = Math.round(rentalDuration / convertedTimes[index]);

              dispatch(setPrice(Number(optionalPrice)));
              dispatch(setRate({ id, name }));
              dispatch(setPrice(optionalPrice + Number(price) * totalDaysCount));
            }}
            checked={id === rate.id}
            disabled={disabledByRateTypeId[Number(id)]}
            radioId={id}
            key={id}
            label={`${name}, ${price} ₽`}
            name="rate"
          />
        ))}
      </StyledRadioOptionalButtonsContainer>
    </StyledOptionalRateContainer>
  );
}
