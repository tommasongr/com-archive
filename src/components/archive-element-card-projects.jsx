import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import ArchiveElementCardProjectsElement from './archive-element-card-projects-element'

const ArchiveElementCardProjectsStyle = styled.div`
    grid-column: 2/13;
    grid-row: 4/5;
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
`

const ArchiveElementCardProjects = ({ designer }) => {
    const data = useStaticQuery(graphql`
        query ArchiveElementCardProjects {
            allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/projects/" } }
                sort: { fields: frontmatter___date, order: DESC }
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            name
                            client
                            year
                            designer
                            preview {
                                childImageSharp {
                                    fluid(maxWidth: 500, quality: 100) {
                                        ...GatsbyImageSharpFluid
                                        presentationWidth
                                    }
                                }
                            }
                            images {
                                id
                                childImageSharp {
                                    fluid(quality: 100) {
                                        ...GatsbyImageSharpFluid
                                        presentationWidth
                                    }
                                }
                            }
                        }
                        html
                    }
                }
            }
        }
    `)

    return (
        <ArchiveElementCardProjectsStyle>
            <h3>Progetti</h3>
            <ArchiveElementCardProjectsLabels />
            {data.allMarkdownRemark.edges.map(
                ({ node }) =>
                    node.frontmatter.designer.includes(designer) && (
                        <ArchiveElementCardProjectsElement
                            key={node.id}
                            project={node}
                        />
                    )
            )}
        </ArchiveElementCardProjectsStyle>
    )
}

const ArchiveElementCardProjectsLabelsStyle = styled.div`
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

    .archive-element-card-projects-labels-year {
        grid-column: 1/2;
    }

    .archive-element-card-projects-labels-name {
        grid-column: 2/6;
    }

    .archive-element-card-projects-labels-client {
        grid-column: 6/10;
    }

    .archive-element-card-projects-labels-preview {
        grid-column: 10/12;
    }
`

const ArchiveElementCardProjectsLabels = () => (
    <ArchiveElementCardProjectsLabelsStyle>
        <span className="archive-element-card-projects-labels-year">
            Anno prog.
        </span>
        <span className="archive-element-card-projects-labels-name">
            Titolo
        </span>
        <span className="archive-element-card-projects-labels-client">
            Committente
        </span>
        <span className="archive-element-card-projects-labels-preview">
            Anteprima
        </span>
    </ArchiveElementCardProjectsLabelsStyle>
)

export default ArchiveElementCardProjects
