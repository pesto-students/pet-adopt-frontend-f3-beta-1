import { configureStore } from "@reduxjs/toolkit";
import addPetDetailSliceReducer from "./slices/AddPetSlice";
import myPetsSliceReducer from "./slices/MyPetsSlice";
import petInDetailSliceReducer from "./slices/PetInDetailSlice";
import userSignUpSliceReducer from "./slices/UserDetailSlice";
import loggedInUserSliceReducer from './slices/LoggedInUserDataSlice'
const store = configureStore({
  reducer: {
    petInDetail: petInDetailSliceReducer,
    petDetail: addPetDetailSliceReducer,
    myPets: myPetsSliceReducer,
    userSignUp: userSignUpSliceReducer,
    loggedInUserDetails :loggedInUserSliceReducer 
  },
});

export default store;
