// Plugins
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const Image = require('@11ty/eleventy-img');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true,
};
const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs);

// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');
const CleanCSS = require('clean-css');
const { minify } = require('terser');

// Image Header Shortcode
async function imageHeaderShortcode(src, alt, sizes) {
    let metadata = await Image(src, {
        widths: [300, 600, 900, 1200, 1800, 2000, 3500],
        formats: ['webp', 'jpg'],
        outputDir: './src/images/processed',
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
        widths: [300, 600, 900, 1200, 2400],
        formats: ['webp', 'jpg'],
        outputDir: './src/images/processed',
    });

    let imageAttributes = {
        alt,
        sizes,
        loading: 'lazy',
        decoding: 'async',
    };

    return Image.generateHTML(metadata, imageAttributes, {
        whitespaceMode: 'inline',
    });
}

module.exports = (config) => {
    // Add Image Shortcodes
    config.addNunjucksAsyncShortcode('headerimage', imageHeaderShortcode);
    config.addNunjucksAsyncShortcode('image', imageShortcode);

    // Add Plugins
    config.addPlugin(syntaxHighlight);
    config.setLibrary("md", markdownLib);

    // Add filters
    config.addFilter('dateFilter', dateFilter);
    config.addFilter('w3DateFilter', w3DateFilter);
    config.addFilter('cssmin', function (code) {
        return new CleanCSS({}).minify(code).styles;
    });
    config.addNunjucksAsyncFilter('jsmin', async function (code, callback) {
        try {
            const minified = await minify(code);
            callback(null, minified.code);
        } catch (err) {
            console.error('Terser error: ', err);
            // Fail gracefully.
            callback(null, code);
        }
    });

    // Set directories to pass through to the dist folder
    config.addPassthroughCopy({ './src/images/processed': 'img' });
    config.addPassthroughCopy('./src/fonts/');
    config.addPassthroughCopy({
        './node_modules/swup/dist/swup.min.js': 'javascript/swup.min.js',
    });
    config.addPassthroughCopy({
        './node_modules/@swup/js-plugin/dist/SwupJsPlugin.min.js':
            'javascript/SwupJsPlugin.min.js',
    });
    config.addPassthroughCopy({
        './node_modules/@swup/preload-plugin/dist/SwupPreloadPlugin.min.js':
            'javascript/SwupPreloadPlugin.min.js',
    });
    config.addPassthroughCopy({
        './node_modules/@swup/scroll-plugin/dist/SwupScrollPlugin.min.js':
            'javascript/SwupScrollPlugin.min.js',
    });
    config.addPassthroughCopy({
        './node_modules/gsap/dist/gsap.min.js': 'javascript/gsap.min.js',
    });

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
