const inspect = require("util").inspect;

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("inspect", inspect);
  eleventyConfig.addFilter("toString", obj => obj.toString());
  eleventyConfig.addFilter("firstLine", txt => txt.trim().split("\n")[0].trim());
  eleventyConfig.addFilter("firstLineCode", txt => {
    txt = eleventyConfig.getFilter("firstLine")(txt);
    if (txt.endsWith("{")) {
      return txt += " ... }";
    }
    return txt;
  });

  eleventyConfig.addShortcode("versionString", (pkg={}, key="") => {
    const {name, version} = pkg[key];
    return `${name} v${version}`;
  });

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
