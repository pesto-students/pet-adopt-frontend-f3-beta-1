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

export const fetchAllPetDetails = createAsyncThunk(
  "/fetchallpet",
  async (userId) => {
    const res = await petDataService.getAllPets(userId);
    return res.data;
  }
);

export const sendRequest = createAsyncThunk(
  "/sendrequest",
  async (_id,userId) => {
    const res = await petDataService.sendRequest(_id,userId);
    return res.data;
  }
);

export const petInDetail = createAsyncThunk(
  "/petindetail",
  async (_id,userId) => {
    const res = await petDataService.petInDetail(_id,userId);
    return res.data;
  }
);

const addPetDetailSlice = createSlice({
  name: "PetDetails",
  initialState,
  reducers: {},
  extraReducers: {
    [createPetDetails.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [fetchAllPetDetails.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [sendRequest.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [petInDetail.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default addPetDetailSlice.reducer;
