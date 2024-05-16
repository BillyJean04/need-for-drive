import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "@/types";

export interface ModelSlice {
  id: number;
  name: string;
  priceMin: number;
  priceMax: number;
  img: string;
}

const initialState: ModelSlice = {
  id: 0,
  name: "",
  priceMin: 0,
  priceMax: 0,
  img: "",
};

const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    setModel: (state, action: PayloadAction<ModelSlice>) => ({
      ...state,
      ...action.payload,
    }),
    deleteModel: () => initialState,
  },
});

export const getModelName = (state: RootState) => state.model.name;

export const { setModel, deleteModel } = modelSlice.actions;

export default modelSlice.reducer;
