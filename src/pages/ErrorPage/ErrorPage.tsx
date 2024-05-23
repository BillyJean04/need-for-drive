import { useNavigate, useRouteError } from "react-router-dom";

import { Button } from "@/components/ui";
import { StyledErrorPageContainer } from "@/pages/ErrorPage/ErrorPage.styled";

export function ErrorPage() {
  const error = useRouteError() as Error;
  const navigate = useNavigate();

  if (error) {
    return (
      <StyledErrorPageContainer>
        <h1>Обшибка!</h1>
        <p>
          <i>{error.message}</i>
        </p>
        <Button $color="lightGreen" onClick={() => navigate("/location")}>
          Вернуться назад
        </Button>
      </StyledErrorPageContainer>
    );
  }
}
