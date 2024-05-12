import { StyledMarker } from "@/components/Map/components/Marker/Marker.styled";

interface MarkerProps {
  lat: number;
  lng: number;
  handleClick: () => void;
  isActive: boolean;
}

export function Marker({ lat, lng, handleClick, isActive = false }: MarkerProps) {
  return (
    <StyledMarker
      $isActive={isActive}
      onClick={handleClick}
      $lat={lat}
      $lng={lng}
      className="pin"
    />
  );
}
