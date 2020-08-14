import { createReducer } from "@reduxjs/toolkit";
import { onBrandChangeAction } from "../../../actions";
import { DEFAULT_BRAND_VALUE } from "../../../common";

export type IByBrandState = string;

const byBrandReducer = createReducer<IByBrandState>(
  DEFAULT_BRAND_VALUE,
  builder => {
    builder.addCase(onBrandChangeAction, (state, { payload }) => payload);
  }
);

export default byBrandReducer;
