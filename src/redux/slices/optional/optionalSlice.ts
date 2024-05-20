import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "@/types";

export interface OptionalSlice {
  color: string;
  duration: string;
  dateFrom: number;
  dateTo: number;
  rate: {
    id: number;
    name: string;
  };
  isFullTank: boolean;
  isNeedChildChair: boolean;
  isRightWheel: boolean;
  price: number;
}

const initialState: OptionalSlice = {
  color: "",
  duration: "",
  dateFrom: 0,
  dateTo: 0,
  rate: {
    id: 0,
    name: "",
  },
  isFullTank: false,
  isNeedChildChair: false,
  isRightWheel: false,
  price: 0,
};

interface AdditionalOptionsPayload {
  option: "isFullTank" | "isNeedChildChair" | "isRightWheel";
  value: boolean;
}

const optionalSlice = createSlice({
  name: "optional",
  initialState,
  reducers: {
    setColor(state, action: PayloadAction<OptionalSlice["color"]>) {
      state.color = action.payload;
    },
    setDateFrom: (state, action: PayloadAction<OptionalSlice["dateFrom"]>) => {
      state.dateFrom = action.payload;
    },
    setDateTo: (state, action: PayloadAction<OptionalSlice["dateTo"]>) => {
      state.dateTo = action.payload;
    },
    setDuration: (state, action: PayloadAction<OptionalSlice["duration"]>) => {
      state.duration = action.payload;
    },
    setRate: (state, action: PayloadAction<OptionalSlice["rate"]>) => {
      state.rate = { ...action.payload };
    },
    setAdditionalOption: (state, { payload }: PayloadAction<AdditionalOptionsPayload>) => {
      const { option, value } = payload;

      state[option] = !value;
    },
    deleteAdditionalOptions: (state) => ({
      ...state,
      isFullTank: false,
      isNeedChildChair: false,
      isRightWheel: false,
    }),
    deleteRate: (state) => ({
      ...state,
      rate: {
        id: 0,
        name: "",
      },
    }),
    setPrice: (state, action: PayloadAction<OptionalSlice["price"]>) => {
      state.price = action.payload;
    },
    deletePrice: (state) => {
      state.price = 0;
    },
    deleteAllOptions: () => initialState,
  },
});

export const getOptionals = (state: RootState) => ({
  color: state.optional.color,
  duration: state.optional.duration,
  rate: state.optional.rate.name,
  isFullTank: state.optional.isFullTank,
  isNeedChildChair: state.optional.isNeedChildChair,
  isRightWheel: state.optional.isRightWheel,
});

export const {
  setColor,
  setDateFrom,
  setDateTo,
  setDuration,
  setRate,
  deleteRate,
  deleteAllOptions,
  setAdditionalOption,
  deleteAdditionalOptions,
  setPrice,
  deletePrice,
} = optionalSlice.actions;

export default optionalSlice.reducer;
