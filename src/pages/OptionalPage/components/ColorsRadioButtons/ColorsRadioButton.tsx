import { RadioButton } from "@/components/ui/RadioButton";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setColor } from "@/redux/slices/optional/optionalSlice";

import { StyledOptionalLabel } from "../../OptionalPage.styled";
import {
  StyledOptionalColorsContainer,
  StyledOptionalColorsRadioButtons,
} from "./ColorsRadioButton.styled";

export function ColorsRadioButtons() {
  const colors = useAppSelector((state) => state.model.colors);
  const { color: carColor } = useAppSelector((state) => state.optional);
  const dispatch = useAppDispatch();

  return (
    <StyledOptionalColorsContainer>
      <StyledOptionalLabel>Цвет</StyledOptionalLabel>
      <StyledOptionalColorsRadioButtons>
        {colors.map((color, i) => (
          <RadioButton
            checked={color === carColor}
            onChange={() => dispatch(setColor(color))}
            radioId={i}
            key={color}
            label={color}
            name="color"
          />
        ))}
      </StyledOptionalColorsRadioButtons>
    </StyledOptionalColorsContainer>
  );
}
