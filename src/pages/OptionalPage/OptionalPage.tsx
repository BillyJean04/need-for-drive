import {
  AdditionalCheckboxes,
  ColorsRadioButtons,
  DatePickers,
  RateRadioButtons,
} from "./components";
import { StyledOptionalPageContainer } from "./OptionalPage.styled";

export function OptionalPage() {
  return (
    <StyledOptionalPageContainer>
      <ColorsRadioButtons />
      <DatePickers />
      <RateRadioButtons />
      <AdditionalCheckboxes />
    </StyledOptionalPageContainer>
  );
}
