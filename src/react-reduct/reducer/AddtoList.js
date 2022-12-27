import { createSlice } from "@reduxjs/toolkit";

export const AddToList = createSlice({
  name: "list",
  initialState: { mylist: [] },
  reducers: {
    addList(state, action) {
      state.mylist.push(action.payload);
    },
  },
});
export const { addList } = AddToList.actions;

export default AddToList.reducer;
