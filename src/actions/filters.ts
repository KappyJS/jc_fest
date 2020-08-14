import {createAction} from "@reduxjs/toolkit";

export const onFilterTextChangeAction = createAction<string>("CHANGE_TEXT_FILTER");

export const onBrandChangeAction = createAction<string>("CHANGE_BRAND_FILTER");