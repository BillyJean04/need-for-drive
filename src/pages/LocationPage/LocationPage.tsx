import "react-bootstrap-typeahead/css/Typeahead.css";

import { useQuery } from "@tanstack/react-query";
import { Typeahead } from "react-bootstrap-typeahead";
import { Option } from "react-bootstrap-typeahead/types/types";
import toast from "react-hot-toast";

import CloseButton from "@/assets/input-clear.svg";
import { Map } from "@/components";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  LocationPageContainer,
  StyledInputsContainer,
  StyledTypeheadContainer,
} from "@/pages/LocationPage/LocationPage.styled";
import { deleteCity, deletePoint, setCity, setPoint } from "@/redux/slices/location/locationSlice";
import { CitiesApi, PointsApi } from "@/types/api";
import { Urls } from "@/utils/consts/urls";
import { fetcher } from "@/utils/fetcher";

export function LocationPage() {
  const dispatch = useAppDispatch();
  const location = useAppSelector((state) => state.location);

  const { data: cities } = useQuery<CitiesApi>({
    queryKey: ["cities"],
    queryFn: () => fetcher(Urls.cities, { method: "GET" }),
  });

  const { data: points } = useQuery<PointsApi>({
    queryKey: ["addresses"],
    queryFn: () => fetcher(Urls.addresses, { params: `${location.city.id}`, method: "GET" }),
    enabled: !!location.city?.name,
  });

  const transformedCities = cities?.data?.map(({ id, name }) => ({
    id,
    name,
  }));

  const transformedPoints = [{ id: points?.data.id ?? 0, address: points?.data.address ?? "" }];

  const handleSelectCity = (selected: Option[]) => {
    const selectedCity = selected[0] as { id: number; name: string };
    dispatch(selected.length ? setCity(selectedCity) : deleteCity());
  };

  const handleSelectPoint = (selected: Option[]) => {
    const selectedPoint = selected[0] as { id: number; address: string };

    dispatch(selected.length ? setPoint(selectedPoint) : deletePoint());
  };

  return (
    <LocationPageContainer>
      <StyledInputsContainer>
        <StyledTypeheadContainer>
          <label htmlFor="city">Город</label>
          <Typeahead
            onChange={handleSelectCity}
            placeholder="Начните вводить город"
            id="city"
            labelKey="name"
            options={transformedCities ?? []}
            selected={location?.city?.name ? [location?.city?.name] : []}
          >
            {({ onClear, selected }) => (
              <div className="rbt-aux">
                {!!selected.length && <CloseButton onClick={onClear} />}
              </div>
            )}
          </Typeahead>
        </StyledTypeheadContainer>
        <StyledTypeheadContainer $disabled={!location.city?.name}>
          <label htmlFor="point">Пункт выдачи</label>
          <div onFocus={() => !location.city?.name && toast.error("Сначала выберите город")}>
            <Typeahead
              disabled={!location.city?.name}
              onChange={handleSelectPoint}
              placeholder="Начните вводить пункт"
              id="point"
              labelKey="address"
              options={transformedPoints ?? []}
              selected={location?.point?.address ? [location?.point?.address] : []}
            >
              {({ onClear, selected }) => (
                <div className="rbt-aux">
                  {!!selected.length && <CloseButton onClick={onClear} />}
                </div>
              )}
            </Typeahead>
          </div>
        </StyledTypeheadContainer>
      </StyledInputsContainer>
      <Map city={location?.city?.name} />
    </LocationPageContainer>
  );
}
