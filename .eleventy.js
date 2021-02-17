const inspect = require("util").inspect;

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("inspect", inspect);
  eleventyConfig.addFilter("firstLine", txt => txt.split("\n")[0].trim());

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
