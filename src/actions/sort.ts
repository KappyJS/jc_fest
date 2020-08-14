import {createAction} from "@reduxjs/toolkit";
import {SORT_TYPE} from "common/constants";

export const onSortChangeAction = createAction<SORT_TYPE>("CHANGE_SORT");