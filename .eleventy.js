module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/favicon.svg");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  eleventyConfig.addCollection("recipes", (api) =>
    api
      .getFilteredByGlob("src/recipes/*.md")
      .sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addCollection("allTags", (api) => {
    const tagSet = new Set();
    api.getFilteredByGlob("src/recipes/*.md").forEach((item) => {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    });
    return [...tagSet].sort();
  });

  return {
    dir: { input: "src", output: "_site" },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
  };
};
