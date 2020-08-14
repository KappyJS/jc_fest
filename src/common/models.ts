export type RateType = 0 | 1 | 2 | 3 | 4 | 5;
export type ID = string;

export interface ITobacco {
  name: string;
  id: ID;
  rate: RateType;
}

export interface ITobaccoData {
  owner: string;
  data: ITobacco[];
}

export interface IRateOptions {
  rate: RateType;
  id: ID;
}
