const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withMdxFm = require('next-mdx-frontmatter')({
  extension: /\.mdx?$/
});

module.exports = withMdxFm(
  withSass(
    withCss({
      pageExtensions: ['js', 'jsx', 'md', 'mdx']
    })
  )
);
