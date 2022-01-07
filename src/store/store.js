import { configureStore } from "@reduxjs/toolkit";
import addPetDetailSliceReducer from "./slices/AddPetSlice";

const store = configureStore({
  reducer: { petDetail: addPetDetailSliceReducer },
});

export default store;
