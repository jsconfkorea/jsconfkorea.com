module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
    },
    {
      resolve: `gatsby-plugin-emotion`,
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve('./src/components/Layout.tsx'),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-154890526-1',
      },
    },
    {
      resolve: `gatsby-transformer-yaml`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/i18n/locales/`,
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#ee7911`,
        showSpinner: true,
      },
    },
  ],
}
