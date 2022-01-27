import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import petDataService from "../../api/petDataServices";

const initialState = [];

export const petInDetail = createAsyncThunk(
  "/petindetail/",
  async (_id) => {
    console.log(_id);  
    const res = await petDataService.petInDetail(_id);
    return res.data;
  }
);

export const handleLike = createAsyncThunk(
  "/like",
  async (_id,userId) => {
    const res = await petDataService.handleLike(_id,userId);
    return res.data;
  }
);

export const handleUnLike = createAsyncThunk(
  "/unlike",
  async (_id,userId) => {
    const res = await petDataService.handleUnLike(_id,userId);
    return res.data;
  }
);

export const sendRespond = createAsyncThunk(
  "/sendrespond",
  async (_id,userId) => {
    const res = await petDataService.sendRespond(_id,userId);
    return res.data;
  }
);

const petInDetailSlice = createSlice({
  name: "PetInDetail",
  initialState,
  reducers: {},
  extraReducers: {
    [petInDetail.fulfilled]: (state, action) => {
      return action.payload
    },
    [handleLike.fulfilled]: (state, action) => {
      return action.payload
    },
    [handleUnLike.fulfilled]: (state, action) => {
      return action.payload
    },
    [sendRespond.fulfilled]: (state, action) => {
      return action.payload
    },
  },
});

export default petInDetailSlice.reducer;
