import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { clone } from 'ramda';
import { DialogState, ShowPayload } from './dialogSlice.models';

const initialState: DialogState = {
  open: false,
  title: undefined,
  logo: undefined,
  currentPrice: undefined,
  percentage24: undefined,
};

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    showDialog: (state, action: PayloadAction<ShowPayload>) => ({
      ...state,
      open: true,
      title: action.payload.title,
      logo: action.payload.logo,
      currentPrice: action.payload.currentPrice,
      percentage24: action.payload.percentage24,
    }),
    hideDialog: () => clone(initialState),
  },
});

export default dialogSlice;
export const { hideDialog, showDialog } = dialogSlice.actions;
