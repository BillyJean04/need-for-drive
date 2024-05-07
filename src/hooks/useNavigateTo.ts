import { useLocation } from "react-router-dom";

import { buttonTextForNextStep } from "@/components/OrderInfo/consts";
import { routesPathsNames } from "@/utils/consts/routesPathsNames";

export function useNavigateTo() {
  const { pathname } = useLocation();

  return Object.values(routesPathsNames).reduce(
    (acc, item, index, array) =>
      (item === pathname
        ? {
          ...acc,
          nextPathname: array[index + 1],
          buttonText: buttonTextForNextStep[item],
        }
        : acc),
    {},
  ) as { nextPathname: string; buttonText: string } | Record<string, never>;
}
