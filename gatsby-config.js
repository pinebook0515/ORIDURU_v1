module.exports = {
  siteMetadata: {
    title: `ORIDURU`,
    description: `マツモトタクムの個人ブログ。プログラミングやデザイン、ライフハック、本から得た知識などを発信していきます。`,
    author: {
      name: `Takumu Matsumoto`,
      summary: `who lives and works in Tokyo as an Web Developer.`,
    },
    siteUrl: `https://oriduru.netlify.app`, // デプロイ後修正する
    lang: `ja`,
    locale: `ja_JP`,
    social: {
      twitter: `Pinebook0515`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ORIDURU`,
        short_name: `ORIDURU`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#728885`,
        display: `standalone`,
        icon: `src/images/logo_icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["material icons", "roboto:300,400,500,700"],
      },
    },
  ],
}
