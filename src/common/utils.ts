import { RateType } from "common/models";

export const validateRate = (rate: any): rate is RateType =>
  rate === 1 || rate === 2 || rate === 3 || rate === 4 || rate === 5;
