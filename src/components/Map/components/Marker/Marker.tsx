import { StyledMarker } from "@/components/Map/components/Marker/Marker.styled";

interface MarkerProps {
  lat: number;
  lng: number;
}
export function Marker({ lat, lng }: MarkerProps) {
  return <StyledMarker $lat={lat} $lng={lng} className="pin" />;
}
