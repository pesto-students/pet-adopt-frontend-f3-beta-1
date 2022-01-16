import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import petDataService from "../../api/petDataServices";

const initialState = [];
export const signUpUser = createAsyncThunk("/signup", async (signUpUser) => {
  const res = await petDataService.signUpUser(signUpUser);
  console.log(res.status);
  return res.status;
});

export const fetchPetDetails = createAsyncThunk("/fetchpet", async (addPet) => {
  const res = await petDataService.getAll(addPet);
  return res.data;
});

const signUpUserSlice = createSlice({
  name: "userSignUp",
  initialState,
  reducers: {},
  extraReducers: {
    [signUpUser.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default signUpUserSlice.reducer;
