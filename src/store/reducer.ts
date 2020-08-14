import { combineReducers } from "@reduxjs/toolkit";
import dataReducer, { IDataState } from "./data";
import sortsReducer, { ISortsState } from "./sorts";
import filtersReducer, { IFiltersState } from "./filters";

export interface IRootState {
  data: IDataState;
  sorts: ISortsState;
  filters: IFiltersState;
}

const rootReducer = combineReducers<IRootState>({
  data: dataReducer,
  sorts: sortsReducer,
  filters: filtersReducer
});

export default rootReducer;
