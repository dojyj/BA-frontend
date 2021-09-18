import { createSlice } from "@reduxjs/toolkit";

export const inboxSlice = createSlice({
  name: "inbox",
  initialState: {
    sendMessageIsOpen: true,
  },
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { openSendMessage, closeSendMessage } = inboxSlice.actions;
export const selectSendMessageIsOpen = (state) => state.sendMessageIsOpen;
export default inboxSlice.reducer;
