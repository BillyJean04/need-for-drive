import { MainPageContent } from "@/components";
import { MainPageSlider } from "@/components/MainPageSlider";
import { slideItems } from "@/constants";
import { StyledMainPage } from "@/pages/MainPage/MainPage.styled";

export default function MainPage() {
  return (
    <StyledMainPage>
      <MainPageContent />
      <MainPageSlider items={slideItems} />
    </StyledMainPage>
  );
}
