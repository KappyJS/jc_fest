import {  combineReducers } from "@reduxjs/toolkit";
import byTextReducer, { IByTextState } from "./byText";
import byBrandReducer, { IByBrandState } from "./byBrand";

export type IFiltersState = {
  byText: IByTextState;
  byBrand: IByBrandState;
};

const filtersReducer = combineReducers<IFiltersState>({
  byBrand: byBrandReducer,
  byText: byTextReducer
});

export default filtersReducer;
