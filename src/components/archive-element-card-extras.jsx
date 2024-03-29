import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import ArchiveElementCardExtrasElement from './archive-element-card-extras-element'

const ArchiveElementCardExtrasStyle = styled.div`
    grid-column: 2/13;
    grid-row: 5/6;
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-column-gap: 1.2222222222222223rem;
    margin-top: 3.888888888888889rem;

    h3 {
        grid-column: 1/12;
        margin: 0;
        font-size: 1.1111111111111112rem;
        line-height: 1.7777777777777777rem;
        margin-bottom: 1.1111111111111112rem;
    }

    @media screen and (max-width: 900px) {
        grid-column: 1/13;
    }
`

const ArchiveElementCardExtras = ({ designer }) => {
    const data = useStaticQuery(graphql`
        query ArchiveElementCardExtras {
            allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/extras/" } }
                sort: { fields: frontmatter___date, order: DESC }
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            name
                            content_type
                            designer
                            date(formatString: "YYYY")
                        }
                        timeToRead
                        html
                    }
                }
            }
        }
    `)

    return (
        <ArchiveElementCardExtrasStyle>
            <h3>Altri contenuti</h3>
            <ArchiveElementCardExtrasLabels />
            {data.allMarkdownRemark.edges.map(
                ({ node }) =>
                    node.frontmatter.designer.includes(designer) && (
                        <ArchiveElementCardExtrasElement
                            key={node.id}
                            extras={node}
                        />
                    )
            )}
        </ArchiveElementCardExtrasStyle>
    )
}

const ArchiveElementCardExtrasLabelsStyle = styled.div`
    grid-column: 1/12;
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-gap: 1.2222222222222223rem;
    margin-bottom: 0.4444444444444444rem;

    span {
        font-family: 'Suisse Intl', serif;
        font-weight: 400;
        color: var(--accent-color);
        font-size: 0.6666666666666666rem;
        line-height: 1.3333333333333333rem;
    }

    .archive-element-card-extras-labels-year {
        grid-column: 1/2;
    }

    .archive-element-card-extras-labels-name {
        grid-column: 2/6;
    }

    .archive-element-card-extras-labels-content-type {
        grid-column: 6/10;
    }

    .archive-element-card-extras-labels-timing {
        grid-column: 10/12;
    }

    @media screen and (max-width: 900px) {
        .archive-element-card-extras-labels-year {
            display: none;
        }

        .archive-element-card-extras-labels-name {
            grid-column: 1/8;
        }

        .archive-element-card-extras-labels-content-type {
            grid-column: 8/12;
        }

        .archive-element-card-extras-labels-timing {
            display: none;
        }
    }

    @media screen and (max-width: 470px) {
        .archive-element-card-extras-labels-content-type {
            display: none;
        }
    }
`

const ArchiveElementCardExtrasLabels = () => (
    <ArchiveElementCardExtrasLabelsStyle>
        <span className="archive-element-card-extras-labels-year">
            Anno di agg.
        </span>
        <span className="archive-element-card-extras-labels-name">Titolo</span>
        <span className="archive-element-card-extras-labels-content-type">
            Tipo di contenuto
        </span>
        <span className="archive-element-card-extras-labels-timing">
            Tempo di lettura
        </span>
    </ArchiveElementCardExtrasLabelsStyle>
)

export default ArchiveElementCardExtras
