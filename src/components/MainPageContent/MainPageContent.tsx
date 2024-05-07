import { useNavigate } from "react-router-dom";

import { Header } from "@/components";
import {
  FooterContainer,
  MainContainer,
  StyledMainPageContent,
} from "@/components/MainPageContent/MainPageContent.styled";
import { Button } from "@/components/ui";

export function MainPageContent() {
  const navigate = useNavigate();

  return (
    <StyledMainPageContent>
      <Header />
      <MainContainer>
        <h1>
          Каршеринг
          <span> Need for drive</span>
        </h1>
        <p>Поминутная аренда авто твоего города</p>
        <Button onClick={() => navigate("/location")} $color="lightGreen">
          Забронировать
        </Button>
      </MainContainer>
      <FooterContainer>
        <p>© 2016-2019 «Need for drive»</p>
        <span>8 (495) 234-22-44</span>
      </FooterContainer>
    </StyledMainPageContent>
  );
}
