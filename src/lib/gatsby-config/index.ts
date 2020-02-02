console.log('gatsby-config')
export default {
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
    },
    {
      resolve: `gatsby-plugin-emotion`,
    },
    // {
    //   resolve: `gatsby-plugin-layout`,
    //   options: {
    //     component: require.resolve('./src/layouts/Layout.tsx'),
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-154890526-1',
      },
    },
    // {
    //   resolve: `gatsby-plugin-page-creator`,
    //   options: {
    //     path: `${__dirname}/src/pages`,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-intl`,
    //   options: {
    //     path: `${__dirname}/src/i18n`,
    //     languages: [`en`, `ko`],
    //     defaultLanguage: `ko`,
    //     redirect: false,
    //   },
    // },
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
    // {
    //   resolve: 'gatsby-plugin-react-svg',
    //   options: {},
    // },
  ],
}
