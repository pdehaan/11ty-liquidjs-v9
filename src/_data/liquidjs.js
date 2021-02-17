const {Liquid}  = require("liquidjs");
const sortJson = require("sort-json");

const l = new Liquid({});
const $filters = sortJson(l.filters.impls);
const filters = Object.entries(sortJson($filters))
  .reduce((arr, [name, fn]) => {
    arr.push({name, fn: fn.toString()});
    return arr;
  }, []);

module.exports = {
  filters
};
