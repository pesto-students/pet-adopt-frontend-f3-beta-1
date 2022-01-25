import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import petDataService from "../../api/petDataServices";

const initialState = [];
export const loggedInUser = createAsyncThunk("/dashboard", async () => {
  const res = await petDataService.loginCheck();
  console.log(res);
  return res.data;
});

export const login = createAsyncThunk("/signin", async (body) => {
  const res = await petDataService.login(body);
  console.log(res);
  return res.data;
});

const loggedInUserSlice = createSlice({
  name: "loggedInUser",
  initialState,
  reducers: {},
  extraReducers: {
    [loggedInUser.fulfilled]: (state, action) => {
      return action.payload;
    },
    [login.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export default loggedInUserSlice.reducer;
