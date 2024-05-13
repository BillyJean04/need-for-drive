import { MainPageContent, Menu, Sidebar } from "@/components";
import { MainPageSlider } from "@/components/MainPageSlider";
import { StyledMainPage } from "@/pages/MainPage/MainPage.styled";

export function MainPage() {
  return (
    <StyledMainPage>
      <Sidebar />
      <Menu />
      <MainPageContent />
      <MainPageSlider />
    </StyledMainPage>
  );
}
