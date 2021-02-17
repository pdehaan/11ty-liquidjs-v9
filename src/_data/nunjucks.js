const _f = require("nunjucks/src/filters");
const sortJson = require("sort-json");

const $filters = sortJson(_f);
const filters = Object.entries($filters)
  .reduce((arr, [name, fn]) => {
    arr.push({name, fn: fn.toString()});
    return arr;
  }, []);

module.exports = {
  filters
};
