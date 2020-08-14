const { uniqWith, groupBy, prop } = require("ramda");
const responseData = require("./data.json");
const fs = require("fs");

const createWeights = () => {
  let weights = [];
  for (let i = 1000; i !== 0; i = i - 5) {
    weights.push(`${i} г`);
  }
  return weights;
};
const WEIGHTS = createWeights();
const prepareText = txt => {
  const weight = WEIGHTS.find(weight => txt.includes(weight));
  if (weight) {
    const indexOfWeight = txt.indexOf(weight);
    return {
      brand: txt.substring(0, indexOfWeight).trim(),
      name: txt.substring(indexOfWeight + weight.length, txt.length).trim()
    };
  }
  return {
    brand: "",
    name: ""
  };
};

const mapResult = ({ name, uuid }) => ({
  id: uuid,
  rate: 0,
  ...prepareText(name)
});

const uniqData = uniqWith(
  (a, b) => a.name === b.name,
  responseData.result.data.map(mapResult)
);

const grouppedData = groupBy(prop("brand"), uniqData);
const preparedData = Object.keys(grouppedData).map(key => ({
  owner: key,
  data: grouppedData[key]
}));

fs.writeFileSync("dataFiltered.json", JSON.stringify(preparedData));

fs.writeFileSync("data.json", JSON.stringify(preparedData));
