module.exports = {
  siteMetadata: {
    title: 'Functor.xyz',
    description:
      'A personal blog created with one goal in mind: Bringing readers from A to Z in the world of FP.',
    siteUrl: 'https://functor.xyz',
    social: {
      twitter: '@tgrecojs'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-prismjs']
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    'gatsby-plugin-emotion'
  ]
};
