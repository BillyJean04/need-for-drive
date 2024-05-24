import { createBrowserRouter } from "react-router-dom";

import { OrderLayout } from "@/layouts";
import { LocationPage, MainPage, ModelPage, OptionalPage, OrderPage, TotalPage } from "@/pages";
import { ErrorPage } from "@/pages/ErrorPage/ErrorPage";
import { routesPathsNames } from "@/utils/consts/routesPathsNames";

import orderLoader from "./loaders/orderLoader";

const { locationPagePath, modelPagePath, optionalPagePath, totalPagePath, orderPagePath } =
  routesPathsNames;

export const router = createBrowserRouter([
  {
    path: process.env.NODE_ENV === "production" ? process.env.PRODUCTION_PROJECT_ROOT : "/",
    element: <MainPage />,
  },
  {
    path: "/",
    element: <OrderLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: locationPagePath, element: <LocationPage /> },
      { path: modelPagePath, element: <ModelPage /> },
      { path: optionalPagePath, element: <OptionalPage /> },
      { path: totalPagePath, element: <TotalPage /> },
      {
        path: orderPagePath,
        element: <OrderPage />,
        loader: orderLoader,
      },
    ],
  },
]);
