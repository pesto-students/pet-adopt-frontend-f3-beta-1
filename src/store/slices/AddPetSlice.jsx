import { createSlice } from "@reduxjs/toolkit";

const addPetDetailSlice = createSlice({
  name: "addPetDetails",
  initialState: {},
  reducers: {
    submitPetDetails(state, action) {
      console.log(state, action.payload, "submitPetDetails slice");
    },
  },
});

export const { submitPetDetails } = addPetDetailSlice.actions;

export default addPetDetailSlice.reducer;
