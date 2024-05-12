import GoogleMapReact from "google-map-react";

import { Marker } from "@/components/Map/components/Marker";
import { defaultLocation, locations } from "@/components/Map/consts/locations";
import { StyledMapContainer } from "@/components/Map/Map.styled";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setPoint } from "@/redux/slices/location/locationSlice";

interface MapProps {
  city: string;
}

export function Map({ city }: MapProps) {
  const selectedLocation = locations.filter(({ location }) => location.name === city);
  const { point } = useAppSelector((state) => state.location);

  const dispatch = useAppDispatch();

  return (
    <StyledMapContainer>
      <span>Выбрать на карте: </span>

      <GoogleMapReact
        defaultCenter={{ ...defaultLocation }}
        center={selectedLocation[0]?.location ?? { ...defaultLocation }}
        defaultZoom={10}
      >
        {selectedLocation[0]?.location?.points.map(({ id, address, lat, lng }) => (
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
