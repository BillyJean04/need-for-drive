import { configureStore, createSelector } from "@reduxjs/toolkit";

import location, { getFullLocation } from "@/redux/slices/location/locationSlice";

export const store = configureStore({
  reducer: {
    location,
  },
});

export const getOrderInfoData = createSelector([getFullLocation], (a) => ({
  location: a,
  model: "",
  options: {
    color: "",
    duration: "",
    rate: "",
    fullTank: false,
    childSeat: false,
    rightHandDrive: false,
  },
}));
