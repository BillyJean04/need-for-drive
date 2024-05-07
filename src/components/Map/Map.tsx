import GoogleMapReact from "google-map-react";

import { Marker } from "@/components/Map/components/Marker";
import { locations } from "@/components/Map/consts/locations";
import { StyledMapContainer } from "@/components/Map/Map.styled";

interface MapProps {
  city: string;
}

export function Map({ city }: MapProps) {
  const selectedLocation = locations.filter(({ location }) => location.name === city);

  return (
    <StyledMapContainer>
      <span>Выбрать на карте: </span>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={{ lat: 59.955413, lng: 30.337844 }}
        center={selectedLocation[0]?.location}
        defaultZoom={15}
      >
        {selectedLocation[0]?.location?.points.map((location) => (
          <Marker key={location.id} lat={location.lat} lng={location.lng} />
        ))}
      </GoogleMapReact>
    </StyledMapContainer>
  );
}
