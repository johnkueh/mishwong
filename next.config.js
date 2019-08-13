const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
// const withMdxEnhanced = require('next-mdx-enhanced')({
//   extension: /\.md?$/
// });

module.exports = withSass(
  withCss({
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    webpack: cfg => {
      cfg.module.rules.push({
        test: /\.md$/,
        use: 'frontmatter-markdown-loader'
      });
      return cfg;
    }
  })
);
