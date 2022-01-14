import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import petDataService from "../../api/petDataServices";

const initialState = [];
export const loggedInUser = createAsyncThunk("/dashboard", async () => {
  const res = await petDataService.login();
  console.log(res);
  return res;
});

const loggedInUserSlice = createSlice({
  name: "loggedInUser",
  initialState,
  reducers: {
    [loggedInUser.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default loggedInUserSlice.reducer;
