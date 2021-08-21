import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/auth";
//import inboxReducer from "./redecers/inbox";
export default configureStore({
  reducer: {
    auth: userReducer,
    // inbox: inboxReducer,
  },
});
