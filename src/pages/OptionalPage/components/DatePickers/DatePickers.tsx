import "../../../../index.scss";

import { ru } from "date-fns/locale";
import DatePicker from "react-datepicker";

import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  deleteAdditionalOptions,
  deletePrice,
  deleteRate,
  setDateFrom,
  setDateTo,
  setDuration,
  setPrice,
} from "@/redux/slices/optional/optionalSlice";
import { calculateTimeDifference } from "@/utils";

import { StyledOptionalLabel } from "../../OptionalPage.styled";
import {
  StyledDatePickerContainer,
  StyledOptionalDateContainer,
  StyledOptionalDatePickers,
} from "./DatePickers.styled";

export function DatePickers() {
  const { dateFrom, dateTo } = useAppSelector((state) => state.optional);
  const minRentalDuration = 900000;

  const minPrice = useAppSelector((state) => state.model.priceMin);

  const dispatch = useAppDispatch();

  const handleChangeDateFrom = (date: Date | null) => {
    if (date) {
      dispatch(setDateFrom(date.getTime()));
    } else {
      dispatch(deletePrice());
      dispatch(deleteRate());
      dispatch(setDateFrom(0));
      dispatch(setDuration(""));
    }

    if (date && dateTo) {
      const { days, hours, minutes } = calculateTimeDifference(date, new Date(dateTo));
      dispatch(setDateFrom(date?.getTime() ?? 0));
      dispatch(setDuration(`${days} ${hours} ${minutes}` ?? ""));
    }

    dispatch(deleteAdditionalOptions());
    dispatch(deleteRate());
  };

  const handleChangeDateTo = (date: Date | null) => {
    if (dateFrom && date) {
      const { days, hours, minutes } = calculateTimeDifference(new Date(dateFrom), date);
      dispatch(setDateTo(date?.getTime() ?? 0));
      dispatch(setPrice(minPrice));
      dispatch(setDuration(`${days} ${hours} ${minutes}` ?? ""));
    } else {
      dispatch(setDateTo(date?.getTime() ?? 0));
      dispatch(setDuration(""));
      dispatch(deletePrice());
      dispatch(deleteRate());
    }
    dispatch(deleteAdditionalOptions());
    dispatch(deleteRate());
  };

  const filterTimeFrom = (timeFrom: Date) =>
    dateTo
      ? timeFrom.getTime() > new Date().getTime() &&
        timeFrom.getTime() <= dateTo - minRentalDuration
      : timeFrom.getTime() > new Date().getTime();

  const filterTimeTo = (timeTo: Date) =>
    dateFrom
      ? timeTo.getTime() >= dateFrom + minRentalDuration
      : timeTo.getTime() >= new Date().getTime() + minRentalDuration;

  return (
    <StyledOptionalDateContainer>
      <StyledOptionalLabel>Дата аренды</StyledOptionalLabel>
      <StyledOptionalDatePickers>
        <StyledDatePickerContainer>
          <span>С</span>
          <DatePicker
            showTimeSelect
            timeFormat="HH:mm"
            dateFormat="dd.MM.yyyy HH:mm"
            timeIntervals={15}
            locale={ru}
            isClearable
            placeholderText="Введите дату и время"
            minDate={new Date()}
            maxDate={dateTo !== 0 ? new Date(dateTo) : null}
            selected={dateFrom !== 0 ? new Date(dateFrom) : null}
            onChange={handleChangeDateFrom}
            filterTime={filterTimeFrom}
          />
        </StyledDatePickerContainer>
        <StyledDatePickerContainer>
          <span>По</span>
          <DatePicker
            showTimeSelect
            timeFormat="HH:mm"
            dateFormat="dd.MM.yyyy HH:mm"
            timeIntervals={15}
            locale={ru}
            isClearable
            minDate={dateFrom !== 0 ? new Date(dateFrom) : new Date()}
            placeholderText="Введите дату и время"
            selected={dateTo !== 0 ? new Date(dateTo) : null}
            onChange={handleChangeDateTo}
            filterTime={filterTimeTo}
          />
        </StyledDatePickerContainer>
      </StyledOptionalDatePickers>
    </StyledOptionalDateContainer>
  );
}
