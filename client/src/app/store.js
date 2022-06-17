import { configureStore } from "@reduxjs/toolkit";

import { mailApi } from "../services/mailApi";
import mailReducer from "../features/mailSlice";
import notificationReducer from "../features/notificationSlice";

export default configureStore({
  reducer: {
    [mailApi.reducerPath]: mailApi.reducer,
    mails: mailReducer,
    notification: notificationReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mailApi.middleware),
});
