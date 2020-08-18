require("dotenv").config()
module.exports = {
  siteMetadata: {
    lang: `pl`,
    title: `biegamPlock Team `,
    description: `Website of biegamPlock team. Team based in Plock, Poland`,
    author: `adam wojtycki`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,

    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400", "600", "800"],
              subsets: ["latin-ext"],
            },
          ],
        },
      },
    },
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        height: 5,
        prependToBody: false,
        color: `rgba(9, 60, 161, 1)`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_CMS,
      },
    },
  ],
}
