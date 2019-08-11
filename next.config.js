const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withMdxEnhanced = require('next-mdx-enhanced')({
  extension: /\.mdx?$/
});

module.exports = withMdxEnhanced(
  withSass(
    withCss({
      pageExtensions: ['js', 'jsx', 'md', 'mdx']
    })
  )
);
