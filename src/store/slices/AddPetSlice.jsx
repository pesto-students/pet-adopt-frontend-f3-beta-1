import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import petDataService from "../../api/petDataServices";

const initialState = [];
export const createPetDetails = createAsyncThunk(
  "/createpet",
  async (addPet) => {
    const res = await petDataService.create(addPet);
    return res.data;
  }
);

export const fetchPetDetails = createAsyncThunk(
  "/fetchpet",
  async (addPet) => {
    const res = await petDataService.getAll(addPet);
    return res.data;
  }
);

const addPetDetailSlice = createSlice({
  name: "PetDetails",
  initialState,
  reducers: {
    [createPetDetails.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [fetchPetDetails.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default addPetDetailSlice.reducer;
