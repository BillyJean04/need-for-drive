import { configureStore, createSelector } from "@reduxjs/toolkit";

import location, { getFullLocation } from "@/redux/slices/location/locationSlice";
import model, { getModelName } from "@/redux/slices/model/modelSlice";

export const store = configureStore({
  reducer: {
    location,
    model,
  },
});

export const getOrderInfoData = createSelector([getFullLocation, getModelName], (a, b) => ({
  location: a,
  model: b,
  options: {
    color: "",
    duration: "",
    rate: "",
    isFullTank: false,
    isNeedChildChair: false,
    isRightWheel: false,
  },
}));
