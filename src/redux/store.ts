import { configureStore, createSelector } from "@reduxjs/toolkit";

import location, { getFullLocation } from "@/redux/slices/location/locationSlice";
import model, { getModelName } from "@/redux/slices/model/modelSlice";
import optional, { getOptionals } from "@/redux/slices/optional/optionalSlice";

export const store = configureStore({
  reducer: {
    location,
    model,
    optional,
  },
});

export const getOrderInfoData = createSelector(
  [getFullLocation, getModelName, getOptionals],
  (a, b, c) => ({
    location: a,
    model: b,
    options: c,
  }),
);
