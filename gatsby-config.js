require("dotenv").config()
module.exports = {
  siteMetadata: {
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
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_CMS,
      },
    },
  ],
}
