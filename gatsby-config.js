const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: "https://samirroy.com",
    title: "Samir Roy - Startup Engineer",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/static/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@content': path.resolve(__dirname, 'src/components/content'),
          '@sprites': path.resolve(__dirname, 'src/components/sprites'),
          '@widgets': path.resolve(__dirname, 'src/components/widgets'),
          '@svg': path.resolve(__dirname, 'src/static/svg'),
          '@styles': path.resolve(__dirname, 'src/static/styles/'),
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-HS9ZPGHM7F",
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
          send_page_view: true,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: [],
        },
      },
    },
  ],
};
