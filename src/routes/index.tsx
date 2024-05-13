import { createBrowserRouter } from "react-router-dom";

import { OrderLayout } from "@/layouts";
import { LocationPage, MainPage, ModelPage, OptionalPage, TotalPage } from "@/pages";
import { routesPathsNames } from "@/utils/consts/routesPathsNames";

const { locationPagePath, modelPagePath, optionalPagePath, totalPagePath } = routesPathsNames;

export const router = createBrowserRouter([
  {
    path: process.env.NODE_ENV === "production" ? process.env.PRODUCTION_PROJECT_ROOT : "/",
    element: <MainPage />,
  },
  {
    path: "/",
    element: <OrderLayout />,
    children: [
      { path: locationPagePath, element: <LocationPage /> },
      { path: modelPagePath, element: <ModelPage /> },
      { path: optionalPagePath, element: <OptionalPage /> },
      { path: totalPagePath, element: <TotalPage /> },
    ],
  },
]);
