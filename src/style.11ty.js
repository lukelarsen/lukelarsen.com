const path = require('path');
const fs = require('fs');
const CleanCSS = require('clean-css');
module.exports = class {
    data() {
        return {
            permalink: 'styles/styles.css',
            eleventyExcludeFromCollections: true,
        };
    }
    async render() {
        const css = fs.readFileSync(
            path.join(process.cwd(), 'src/_includes/styles/styles.css'),
            'utf8'
        );
        return new CleanCSS({}).minify(css).styles;
    }
};
