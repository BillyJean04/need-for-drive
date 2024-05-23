import { Link } from "react-router-dom";

import Point from "@/assets/point.svg";
import { StyledHeaderContainer } from "@/components/Header/Header.styled";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { deleteCity } from "@/redux/slices/location/locationSlice";
import { deleteModel } from "@/redux/slices/model/modelSlice";
import { deleteAllOptions } from "@/redux/slices/optional/optionalSlice";

export function Header() {
  const city = useAppSelector((state) => state.location?.city);
  const linkToHomePage =
    process.env.NODE_ENV === "production" ? process.env.PRODUCTION_PROJECT_ROOT : "/";
  const dispatch = useAppDispatch();

  return (
    <StyledHeaderContainer>
      <Link
        onClick={() => {
          dispatch(deleteCity());
          dispatch(deleteModel());
          dispatch(deleteAllOptions());
        }}
        to={linkToHomePage ?? "/"}
      >
        Need for drive
      </Link>
      <div>
        <Point color="gray" />
        <span>{city.name.length !== 0 ? city.name : "Ульяновск"}</span>
      </div>
    </StyledHeaderContainer>
  );
}
