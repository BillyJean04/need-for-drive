import { store } from "@/redux/store";

export type ButtonColors = "green" | "lightGreen" | "blue" | "red" | "purple";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
