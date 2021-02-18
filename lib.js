const sortJson = require("sort-json");

function sortFilters(filters) {
  const $filters = sortJson(filters);
  return Object.entries($filters).reduce((arr, [name, fn]) => {
    arr.push({ name, fn: fn.toString() });
    return arr;
  }, []);
}

module.exports = {
  sortFilters,
};
