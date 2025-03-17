import { createSlice } from "@reduxjs/toolkit";

export interface TransactionState {
  list: [];
  filteredList: [];
}

const initialState: TransactionState = {
  list: [],
  filteredList: [],
};

export const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    getList: (state) => {
      return state;
    },
    setList: (state, action) => {
      state.list = action.payload;
      state.filteredList = action.payload;
    },
    filterList: (state, action) => {
      if (action.payload == "all") state.filteredList = state.list;
      else {
        let filteredList = state.list.filter(
          (item: any) => item["cashflow"] === action.payload
        );
        state.filteredList = filteredList;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { getList, setList, filterList } = transactionSlice.actions;

export default transactionSlice.reducer;
