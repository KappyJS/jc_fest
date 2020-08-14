import {createReducer} from "@reduxjs/toolkit";
import {onRateClickAction} from "../../actions";
import { ITobaccoData } from "../../common";
const data = require('../../../data.json')

export type IDataState = ITobaccoData[];

const dataReducer = createReducer<IDataState>(data, builder => {
    builder.addCase(onRateClickAction, (state, { payload }) =>
        state.map(({ data, owner }) => ({
            owner,
            data: data.map(({ id, rate, ...rest }) => ({
                ...rest,
                id,
                rate: id === payload.id ? payload.rate : rate
            }))
        }))
    );
});

export default dataReducer;