import { format } from "date-fns";

import {
  StyledCarNumber,
  StyledOptionContainer,
  StyledOrderContentContainer,
  StyledOrderContentInfo,
} from "@/components/OrderContent/OrderContent.styled";
import { useAppSelector } from "@/hooks";

export function OrderContent() {
  const { name, img } = useAppSelector((state) => state.model);
  const { dateFrom, dateTo, isFullTank } = useAppSelector((state) => state.optional);

  return (
    <StyledOrderContentContainer>
      <StyledOrderContentInfo>
        <h4>{name}</h4>
        <StyledCarNumber>K 761 HA 73</StyledCarNumber>
        <StyledOptionContainer>
          <span>Топливо</span>
          <span>{`${isFullTank ? " 100%" : " 56%"}`}</span>
        </StyledOptionContainer>
        <StyledOptionContainer>
          <span>Доступна с </span>
          <span>{format(dateFrom, "dd.MM.yyyy HH:mm")}</span>
        </StyledOptionContainer>
        <StyledOptionContainer>
          <span>Доступна по </span>
          <span>{format(dateTo, "dd.MM.yyyy HH:mm")}</span>
        </StyledOptionContainer>
      </StyledOrderContentInfo>
      <img src={img} alt="car-img" />
    </StyledOrderContentContainer>
  );
}
