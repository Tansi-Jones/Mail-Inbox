import { createSlice } from "@reduxjs/toolkit";

export const filterUnreadMessages = (fetchAllMails) => {
  let unReadMessages = [];
  let total = 0;
  fetchAllMails.forEach((element) => {
    unReadMessages.push(element.isRead);
  });

  for (let count = 0; count < unReadMessages.length; count++) {
    if (unReadMessages[count] === false) total++;
  }
  return total;
};

const initialState = { value: 0 };

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotifications: (state, action) => {
      const notification = filterUnreadMessages(action.payload);
      state.value = notification;
    },
  },
});

export const { setNotifications } = notificationSlice.actions;
export default notificationSlice.reducer;
export const selectCurrentValue = (state) => state.notification.value;
