import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useOrderPage } from "@/hooks/useOrderPage";
import { getOrderInfoData } from "@/redux/store";

export function useGuard() {
  const navigate = useNavigate();
  const { isOrderPage } = useOrderPage();
  const { location, options, model } = useSelector(getOrderInfoData);

  const isRestricted = !location || !options || !model;

  useEffect(() => {
    if (isRestricted && !isOrderPage) {
      navigate("/location");
    }
  }, [isOrderPage, isRestricted, navigate]);
}
