import Point from "@/assets/point.svg";
import { StyledHeaderContainer } from "@/components/Header/Header.styled";

export function Header() {
  return (
    <StyledHeaderContainer>
      <h2>Need for drive</h2>
      <div>
        <Point color="gray" />
        <span>Ульяновск</span>
      </div>
    </StyledHeaderContainer>
  );
}
