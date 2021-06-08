const path = require('path');
const fs = require('fs');

const { minify } = require('terser');
module.exports = class {
    data() {
        return {
            permalink: 'javascript/transitions.js',
            eleventyExcludeFromCollections: true,
        };
    }
    async render() {
        const transitions = fs.readFileSync(
            path.join(process.cwd(), 'src/_includes/javascript/transitions.js'),
            'utf8'
        );
        const minified = await minify(transitions);
        return minified.code;
    }
};
