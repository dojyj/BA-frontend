import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import inboxReducer from "./features/inboxSlice";
export default configureStore({
  reducer: {
    auth: userReducer,
    inbox: inboxReducer,
  },
});
