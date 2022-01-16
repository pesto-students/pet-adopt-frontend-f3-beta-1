import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import petDataService from "../../api/petDataServices";

const initialState = [];
export const loggedInUser = createAsyncThunk("/dashboard", async () => {
  const res = await petDataService.login();
  console.log(res);
  return res.data;
});

const loggedInUserSlice = createSlice({
  name: "loggedInUser",
  initialState,
  reducers: {},
  extraReducers: {
    [loggedInUser.fulfilled]: (state, action) => {
      state.push(action.payload);
      console.log(action.payload,action.type,state);
    },
  },
});

export default loggedInUserSlice.reducer;
