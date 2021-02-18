const { Liquid } = require("liquidjs");
const { sortFilters } = require("../../lib");

const liquid = new Liquid({});
const filters = sortFilters(liquid.filters.impls);

module.exports = {
  filters,
};
