import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfIceCreams: 20,
};
const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfIceCreams--;
    },
    restocked: (state, actions) => {
      state.numberOfIceCreams += actions.payload;
    },
  },
});

export default iceCreamSlice.reducer
export const {ordered, restocked} = iceCreamSlice.actions
