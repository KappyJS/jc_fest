import { createReducer } from "@reduxjs/toolkit";
import { onFilterTextChangeAction } from "../../../actions";

export type IByTextState = string;

const byTextReducer = createReducer<IByTextState>("", builder => {
  builder.addCase(onFilterTextChangeAction, (state, { payload }) => payload);
});

export default byTextReducer;
