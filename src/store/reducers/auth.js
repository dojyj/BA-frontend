/*import { configureStore } from "@reduxjs/toolkit";
import auth from '../actions/auth';
const initState = null;

const auth = (state = initState, action) => {
  return state;
};

export default auth;
*/
///user slice
import { createSlice } from "@reduxjs/toolkit";

export const auth = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});
export const { login, logout } = auth.actions;
//selectors
export const selectUser = (state) => state.user;
export default auth.reducer;
