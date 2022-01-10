import { configureStore } from "@reduxjs/toolkit";
import addPetDetailSliceReducer from "./slices/AddPetSlice";
import userSignUpSliceReducer from "./slices/UserDetailSlice";
const store = configureStore({
  reducer: {
    petDetail: addPetDetailSliceReducer,
    userSignUp: userSignUpSliceReducer,
  },
});

export default store;
