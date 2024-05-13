import { Link } from "react-router-dom";

import Point from "@/assets/point.svg";
import { StyledHeaderContainer } from "@/components/Header/Header.styled";
import { useAppSelector } from "@/hooks";

export function Header() {
  const city = useAppSelector((state) => state.location?.city);
  const linkToHomePage =
    process.env.NODE_ENV === "production" ? process.env.PRODUCTION_PROJECT_ROOT : "/";

  return (
    <StyledHeaderContainer>
      <Link to={linkToHomePage ?? "/"}>Need for drive</Link>
      <div>
        <Point color="gray" />
        <span>{city.name.length !== 0 ? city.name : "Ульяновск"}</span>
      </div>
    </StyledHeaderContainer>
  );
}
