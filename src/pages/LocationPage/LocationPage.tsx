import "react-bootstrap-typeahead/css/Typeahead.css";

import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { Typeahead as TypeaheadComponent } from "react-bootstrap-typeahead";
import type Typeahead from "react-bootstrap-typeahead/types/core/Typeahead";
import { Option } from "react-bootstrap-typeahead/types/types";

import CloseButton from "@/assets/input-clear.svg";
import { Map } from "@/components";
import { locations } from "@/components/Map/consts/locations";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  LocationPageContainer,
  StyledError,
  StyledInputsContainer,
  StyledTypeheadContainer,
} from "@/pages/LocationPage/LocationPage.styled";
import { deleteCity, deletePoint, setCity, setPoint } from "@/redux/slices/location/locationSlice";
import { CitiesApi } from "@/types/api";
import { Urls } from "@/utils/consts/urls";
import { fetcher } from "@/utils/fetcher";

export function LocationPage() {
  const location = useAppSelector((state) => state.location);
  const [error, setError] = useState("");

  const pointTypeheadRef = useRef<Typeahead>(null);

  const { data: cities } = useQuery<CitiesApi>({
    queryKey: ["cities"],
    queryFn: () => fetcher(Urls.cities, { method: "GET" }),
  });

  const dispatch = useAppDispatch();

  const transformedCities = cities?.data?.map(({ id, name }) => ({
    id,
    name,
  }));

  const filteredLocation = locations.filter(
    ({ location: locationItem }) => locationItem.name === location.city?.name,
  );

  const transformedLocationPoints = filteredLocation[0]?.location?.points.map((point) => ({
    id: point.id,
    address: point.address,
  }));

  const handleSelectCity = (selected: Option[]) => {
    const selectedCity = selected[0] as { id: number; name: string };

    setError("");
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
          <TypeaheadComponent
            onChange={handleSelectCity}
            placeholder="Начните вводить город"
            id="city"
            labelKey="name"
            options={transformedCities ?? []}
            selected={location?.city?.name ? [location?.city?.name] : []}
          >
            {({ onClear, text }) => (
              <div className="rbt-aux">
                {!!text.length && (
                  <CloseButton
                    onClick={() => {
                      pointTypeheadRef.current?.clear();
                      onClear();
                    }}
                  />
                )}
              </div>
            )}
          </TypeaheadComponent>
        </StyledTypeheadContainer>
        <StyledTypeheadContainer $disabled={!location.city?.name}>
          <label htmlFor="point">Пункт выдачи</label>
          <div
            style={{ position: "relative" }}
            onFocus={() => !location.city?.name && setError("Сначала выберите город")}
          >
            <TypeaheadComponent
              disabled={!location.city?.name}
              onChange={handleSelectPoint}
              placeholder="Начните вводить пункт"
              id="point"
              labelKey="address"
              options={transformedLocationPoints ?? []}
              selected={location.point.address ? [location.point.address] : []}
              ref={pointTypeheadRef}
            >
              {({ onClear, text }) => (
                <div className="rbt-aux">{!!text.length && <CloseButton onClick={onClear} />}</div>
              )}
            </TypeaheadComponent>
            {!location.city?.name && <StyledError>{error}</StyledError>}
          </div>
        </StyledTypeheadContainer>
      </StyledInputsContainer>
      <Map city={location?.city?.name} />
    </LocationPageContainer>
  );
}
