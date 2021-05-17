const rssPlugin = require('@11ty/eleventy-plugin-rss');
const Image = require('@11ty/eleventy-img');

// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');
const CleanCSS = require('clean-css');

// Image Header Shortcode
async function imageHeaderShortcode(src, alt, sizes) {
    let metadata = await Image(src, {
        widths: [600, 900],
        formats: ['webp', 'jpg'],
        outputDir: "./src/images/processed",
    });

    let imageAttributes = {
        alt,
        sizes,
        loading: 'lazy',
        decoding: 'async',
    };

    return Image.generateHTML(metadata, imageAttributes);
}

// Regular Image Shortcode
async function imageShortcode(src, alt, sizes) {
    let metadata = await Image(src, {
        widths: [300, 600],
        formats: ['webp', 'jpg'],
        outputDir: "./src/images/processed",
    });

    let imageAttributes = {
        alt,
        sizes,
        loading: 'lazy',
        decoding: 'async',
    };

    return Image.generateHTML(metadata, imageAttributes, {
        whitespaceMode: "inline"
      });
}

module.exports = (config) => {
    // Add Image Shortcodes
    config.addNunjucksAsyncShortcode("headerimage", imageHeaderShortcode);
    config.addNunjucksAsyncShortcode("image", imageShortcode);

    // Add filters
    config.addFilter('dateFilter', dateFilter);
    config.addFilter('w3DateFilter', w3DateFilter);
    config.addFilter('cssmin', function (code) {
        return new CleanCSS({}).minify(code).styles;
    });

    // Set directories to pass through to the dist folder
    config.addPassthroughCopy({'./src/images/processed': 'img'});
    config.addPassthroughCopy('./src/fonts/');

    // Returns a collection of blog posts in reverse date order
    config.addCollection('blog', (collection) => {
        return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
    });

    // Plugins
    config.addPlugin(rssPlugin);

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'dist',
        },
    };
};
