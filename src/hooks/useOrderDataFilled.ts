import { useLocation } from "react-router-dom";

import { useAppSelector } from "@/hooks/index";
import { getOrderInfoData } from "@/redux/store";
import { objectValuesIsFilled } from "@/utils";
import { routesPathsNames } from "@/utils/consts/routesPathsNames";

export function useOrderDataIsFilled() {
  const { pathname } = useLocation();
  const { location, model, options } = useAppSelector(getOrderInfoData);

  const { locationPagePath, modelPagePath, optionalPagePath } = routesPathsNames;

  if (pathname === locationPagePath) return !!location;
  if (pathname === modelPagePath) return !!model;
  if (pathname === optionalPagePath) return objectValuesIsFilled(options);

  return null;
}
