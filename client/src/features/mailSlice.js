import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const mailSlice = createSlice({
  name: "mails",
  initialState,
  reducers: {
    setMails: (state, action) => {
      state.unshift(action.payload);
    },
  },
});

export const { setMails } = mailSlice.actions;
export default mailSlice.reducer;
export const selectMails = (state) => state.mails;
