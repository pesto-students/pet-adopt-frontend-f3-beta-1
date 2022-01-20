import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import petDataService from "../../api/petDataServices";

const initialState = [];

export const fetchPetDetails = createAsyncThunk(
  "/fetchpet",
  async (userId) => {
    const res = await petDataService.getAll(userId);
    return res.data;
  }
);

const MyPetsDetailSlice = createSlice({
  name: "MyPets",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPetDetails.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default MyPetsDetailSlice.reducer;
