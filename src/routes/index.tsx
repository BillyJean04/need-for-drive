import { createBrowserRouter } from "react-router-dom";

import MainPage from "@/pages/MainPage/MainPage";
import OrderPage from "@/pages/OrderPage/OrderPage";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <MainPage />,
  },
  {
    path: "/order",
    element: <OrderPage />,
  },
]);
