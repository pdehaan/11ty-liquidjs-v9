const _filters = require("nunjucks/src/filters");
const { sortFilters } = require("../../lib");

const filters = sortFilters(_filters);

module.exports = {
  filters,
};
