import { createAction } from "@reduxjs/toolkit";
import { IRateOptions } from "common";

export const onRateClickAction = createAction<IRateOptions>("RATE_CLICK");
