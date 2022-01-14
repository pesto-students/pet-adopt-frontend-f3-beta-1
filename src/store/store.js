import { configureStore } from "@reduxjs/toolkit";
import addPetDetailSliceReducer from "./slices/AddPetSlice";
import userSignUpSliceReducer from "./slices/UserDetailSlice";
import loggedInUserSliceReducer from './slices/LoggedInUserDataSlice'
const store = configureStore({
  reducer: {
    petDetail: addPetDetailSliceReducer,
    userSignUp: userSignUpSliceReducer,
    loggedInUserDetails :loggedInUserSliceReducer 
  },
});

export default store;
