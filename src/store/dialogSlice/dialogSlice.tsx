import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { clone } from "ramda";
import { DialogState, ShowPayload } from "./dialogSlice.models";

const initialState: DialogState = {
  open: false,
  title: undefined,
  logo: undefined,
  info1: undefined,
  info2: undefined,
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    showDialog: (state, action: PayloadAction<ShowPayload>) => ({
      ...state,
      open: true,
      title: action.payload.title,
      logo: action.payload.logo,
      info1: action.payload.info1,
      info2: action.payload.info2,
    }),
    hideDialog: () => clone(initialState),
  },
});

export default dialogSlice;
export const { hideDialog, showDialog } = dialogSlice.actions;
