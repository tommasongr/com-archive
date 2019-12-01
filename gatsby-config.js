module.exports = {
    siteMetadata: {
        title: `Archivio Com.`,
        description: `Un archivio di laureati in Design della Comunicazione al Politecnico di Milano, che fanno la differenza.`,
        author: `@tommasongr`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `designers`,
                path: `${__dirname}/src/contents/designers`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                custom: {
                    families: ["Suisse Works, Suisse Intl'"],
                    urls: ['/fonts/fonts.css'],
                },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/archiviocom-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
