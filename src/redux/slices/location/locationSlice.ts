import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "@/types";

export interface LocationSlice {
  city: {
    id: number;
    name: string;
  };
  point: {
    id: number;
    address: string;
    lat?: number;
    lng?: number;
  };
  fullLocation: string;
}

const initialState: LocationSlice = {
  city: {
    id: 0,
    name: "",
  },
  point: {
    id: 0,
    address: "",
    lat: 0,
    lng: 0,
  },
  fullLocation: "",
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<LocationSlice["city"]>) => {
      state.city = action.payload;
    },
    deleteCity: (state) => ({
      ...state,
      city: {
        id: 0,
        name: "",
      },
      point: {
        id: 0,
        address: "",
        lat: 0,
        lng: 0,
      },
      fullLocation: "",
    }),
    setPoint: (state, action: PayloadAction<LocationSlice["point"]>) => {
      state.point = action.payload;
      state.fullLocation = `${state.city.name},/${state.point.address}`;
    },
    deletePoint: (state) => ({
      ...state,
      point: {
        id: 0,
        address: "",
        lat: 0,
        lng: 0,
      },
      fullLocation: "",
    }),
  },
});

export const getFullLocation = (state: RootState) => state.location.fullLocation;

export const { setCity, deleteCity, setPoint, deletePoint } = locationSlice.actions;

export default locationSlice.reducer;
