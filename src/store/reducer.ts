import { createReducer } from "@reduxjs/toolkit";
import { onAppInitAction } from "../actions";

type Reducer = string | null;

const rootReducer = createReducer<Reducer>(null, builder => {
  builder.addCase(onAppInitAction, (a, { payload }) => payload);
});

export default rootReducer;
