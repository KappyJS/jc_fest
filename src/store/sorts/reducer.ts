import { createReducer } from "@reduxjs/toolkit";
import { onSortChangeAction } from "../../actions";
import { SORT_TYPE } from "../../common";

export type ISortsState = SORT_TYPE;

const sortsReducer = createReducer<ISortsState>(
  SORT_TYPE.DEFAULT,
  builder => {
    builder.addCase(onSortChangeAction, (state, { payload }) => payload);
  }
);

export default sortsReducer;
