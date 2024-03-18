import { createSlice } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false, // false: 'PENDING' and ture: 'DONE'
    curruntlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      return (state.fetchDone = true);
    },
    markFetchingStarted: (state) => {
      return (state.curruntlyFetching = true);
    },
    markFetchingFinished: (state) => {
      return (state.curruntlyFetching = false);
    },
  },
});

export const fetchStatusActions = itemsSlice.actions;

export default fetchStatusSlice;
