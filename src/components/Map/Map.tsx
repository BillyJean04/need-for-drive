import GoogleMapReact from "google-map-react";

import { Marker } from "@/components/Map/components/Marker";
import { defaultLocation } from "@/components/Map/consts/locations";
import { StyledMapContainer } from "@/components/Map/Map.styled";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useFilteredCity } from "@/hooks/useFilteredCity";
import { setPoint } from "@/redux/slices/location/locationSlice";

export function Map() {
  const { point, fullLocation } = useAppSelector((state) => state.location);
  const filteredCity = useFilteredCity();

  const dispatch = useAppDispatch();

  const mapCenter = fullLocation
    ? { lat: point.lat, lng: point.lng }
    : { lat: filteredCity?.location.lat, lng: filteredCity?.location.lng };

  return (
    <StyledMapContainer>
      <span>Выбрать на карте: </span>

      <GoogleMapReact
        center={{
          lat: mapCenter?.lat ?? defaultLocation.lat,
          lng: mapCenter?.lng ?? defaultLocation.lng,
        }}
        zoom={point.address ? 14 : 10}
      >
        {filteredCity?.location?.points.map(({ id, address, lat, lng }) => (
          <Marker
            isActive={id === point.id}
            handleClick={() => {
              dispatch(setPoint({ id, address, lat, lng }));
            }}
            key={id}
            lat={lat}
            lng={lng}
          />
        ))}
      </GoogleMapReact>
    </StyledMapContainer>
  );
}
