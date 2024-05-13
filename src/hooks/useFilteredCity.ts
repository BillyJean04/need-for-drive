import { useMemo } from "react";

import { locations } from "@/components/Map/consts/locations";
import { useAppSelector } from "@/hooks/index";

export function useFilteredCity() {
  const { city } = useAppSelector((state) => state.location);

  return useMemo(
    () => locations.filter(({ location: { name } }) => name === city.name)[0],
    [city.name],
  );
}
