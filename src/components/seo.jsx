/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, title, image }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        image
                    }
                }
            }
        `
    )

    const metaDescription = description || site.siteMetadata.description

    const metaImage = image

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: 'apple-mobile-web-app-status-bar-style',
                    content: 'dark',
                },
                {
                    name: 'viewport',
                    content:
                        'width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1',
                },
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:image`,
                    content: metaImage,
                },
                {
                    property: `og:site_name`,
                    content: 'Archivio Com.',
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:image:src`,
                    content: metaImage,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ].concat(meta)}
        />
    )
}

SEO.defaultProps = {
    lang: `it`,
    meta: [],
    description: ``,
    image: `https://archiviocom.netlify.com/com/archiviocom-icon.png`,
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
    metaImage: PropTypes.string,
}

export default SEO
