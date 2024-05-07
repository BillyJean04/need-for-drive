import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getOrderInfoData } from "@/redux/store";

export function useGuard() {
  const navigate = useNavigate();
  const { location, options, model } = useSelector(getOrderInfoData);

  useEffect(() => {
    if (!location || !options || !model) {
      navigate("/location");
    }
  }, [location, model, navigate, options]);
}
