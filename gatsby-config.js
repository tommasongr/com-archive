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
                name: `assets`,
                path: `${__dirname}/static/assets`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contents`,
                path: `${__dirname}/contents`,
            },
        },
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         name: `designers`,
        //         path: `${__dirname}/contents/designers`,
        //     },
        // },
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         name: `projects`,
        //         path: `${__dirname}/contents/projects`,
        //     },
        // },
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         name: `extras`,
        //         path: `${__dirname}/contents/extras`,
        //     },
        // },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                ],
            },
        },
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
                name: `icons`,
                path: `${__dirname}/src/icons`,
            },
        },
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
        `gatsby-plugin-netlify-cms`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}