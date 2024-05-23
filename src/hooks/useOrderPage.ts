import { useLocation, useParams } from "react-router-dom";

export function useOrderPage() {
  const { pathname } = useLocation();
  const params = useParams();

  return { isOrderPage: pathname === `/order/${params.orderId}`, orderId: params.orderId };
}
