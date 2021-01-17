require("dotenv").config({
  path: ".env",
});

module.exports = {
  siteMetadata: {
    title: "paulovitorcs",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress-experimental",
      options: {
        url: process.env.WP_URL,
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-013DP4ZPKQ",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-env-variables",
      options: {
        allowList: ["EMAIL_JS_SERVICE_ID", "EMAIL_JS_TEMPLATE_ID", "EMAIL_JS_USER_ID"],
      },
    },
  ],
};
