import { createSlice } from "redux-starter-kit";


const addPetDetails = createSlice({
  name: "addPetDetails",
  initialState: {},
    reducers: {
    submitPetDetails(state, action) {
      return state + 1;
    },
    addFive(state, action) {
      return state + 5;
    },
  },
  extraReducers: {
    [addTwo](state, action) {
      return state + 2;
    },
  },
});

// console.log(counterSliceA);
// console.log("addTwo, imported from B to A: ", addTwo);

const { actions, reducer } = counterSliceA;

export const { increment, addFive } = actions;

export default reducer;
