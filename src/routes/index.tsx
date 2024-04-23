import { createBrowserRouter } from "react-router-dom";

import MainPage from "@/pages/MainPage/MainPage";
import OrderPage from "@/pages/OrderPage/OrderPage";

export const router = createBrowserRouter([
  {
    path: process.env.NODE_ENV === "production" ? process.env.PRODUCTION_PROJECT_ROOT : "/",
    element: <MainPage />,
  },
  {
    path: "/order",
    element: <OrderPage />,
  },
]);
