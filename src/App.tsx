import React, { ChangeEvent, useMemo } from "react";
import { BrandBlock } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { DEFAULT_BRAND_VALUE, IRateOptions, SORT_TYPE } from "./common";
import classes from "./App.module.css";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@material-ui/core";
import {
  onBrandChangeAction,
  onFilterTextChangeAction,
  onRateClickAction,
  onSortChangeAction
} from "./actions";
import { IRootState } from "store/reducer";

export const App = () => {
  const data = useSelector(({ data }: IRootState) => data);
  const sortType = useSelector(({ sorts }: IRootState) => sorts);
  const filterText = useSelector(({ filters }: IRootState) => filters.byText);
  const filterBrandText = useSelector(
    ({ filters }: IRootState) => filters.byBrand
  );

  const dispatch = useDispatch();

  const onRateClick = (options: IRateOptions) => {
    dispatch(onRateClickAction(options));
  };

  const brands = useMemo(() => data.map(({ owner }) => owner), [data]);

  const filteredByBrand = useMemo(
    () =>
      filterBrandText === DEFAULT_BRAND_VALUE
        ? data
        : data.filter(({ owner }) => owner === filterBrandText),
    [data, filterBrandText]
  );

  const filteredByText = useMemo(
    () =>
      filteredByBrand.map(({ data, ...rest }) => ({
        data: data.filter(({ name }) => name.includes(filterText)),
        ...rest
      })),
    [filteredByBrand, filterText]
  );

  const sortByRating = useMemo(() => {
    if (sortType === SORT_TYPE.BY_RATING) {
      return filteredByText.map(({ data, ...rest }) => ({
        ...rest,
        data: data.sort((a, b) => b.rate  - a.rate )
      }));
    }
    return filteredByText;
  }, [filteredByText, sortType]);

  const dataContent = useMemo(
    () =>
    {
      console.log(sortByRating)
      return sortByRating.map(({ data, owner }) => (
          <BrandBlock
              key={owner}
              title={owner}
              data={data}
              onRateClick={onRateClick}
          />
      ))
    },
    [sortByRating]
  );

  const onFilterTextChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(onFilterTextChangeAction(target.value));
  };

  const onSortChange = (
    options: ChangeEvent<{ name: string; value: SORT_TYPE }>
  ) => {
    dispatch(onSortChangeAction(options.target.value));
  };

  const onBrandChange = (
    options: ChangeEvent<{ name: string; value: string }>
  ) => {
    dispatch(onBrandChangeAction(options.target.value));
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <TextField
          id="outlined-basic"
          label="Поиск по вкусу"
          variant="outlined"
          onChange={onFilterTextChange}
        />
        <span>+</span>
      </div>
      <div className={classes.content}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-helper-label">
            Сортировка по
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={sortType}
            onChange={onSortChange}
            fullWidth
          >
            {Object.values(SORT_TYPE).map(item => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="byBrand">Производитель</InputLabel>
          <Select
            labelId="byBrand"
            id="byBrandId"
            value={filterBrandText}
            onChange={onBrandChange}
            fullWidth
          >
            <MenuItem value={DEFAULT_BRAND_VALUE}>Не выбрано</MenuItem>
            {brands.map(item => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div>{dataContent}</div>
      </div>
    </div>
  );
};
