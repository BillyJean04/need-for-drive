import { Checkbox } from "@/components/ui";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setAdditionalOption, setPrice } from "@/redux/slices/optional/optionalSlice";

import { StyledOptionalLabel } from "../../OptionalPage.styled";
import {
  StyledAdditionalCheckboxesContainer,
  StyledCheckboxesContainer,
} from "./AdditionalCheckboxes.styled";
import { checkboxesList } from "./consts/checkboxesList";

export function AdditionalCheckboxes() {
  const optional = useAppSelector((state) => state.optional);
  const dispatch = useAppDispatch();

  return (
    <StyledAdditionalCheckboxesContainer>
      <StyledOptionalLabel>Доп услуги</StyledOptionalLabel>
      <StyledCheckboxesContainer>
        {checkboxesList.map(({ id, text, price }) => (
          <Checkbox
            disabled={!optional.rate.id}
            checked={optional[id]}
            onChange={() => {
              dispatch(setPrice(optional[id] ? optional.price - price : optional.price + price));
              dispatch(setAdditionalOption({ option: id, value: optional[id] }));
            }}
            key={id}
            label={`${text}, ${price}р`}
          />
        ))}
      </StyledCheckboxesContainer>
    </StyledAdditionalCheckboxesContainer>
  );
}
