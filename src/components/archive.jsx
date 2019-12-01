import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import ArchiveControls from '../components/archive-controls'
import ArchiveElement from '../components/archive-element'

const ArchiveStyled = styled.div`
    display: grid;
    grid-auto-rows: auto;
`

const GridStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1.2222222222222223rem;

    div {
        background-color: pink;
        width: 100%;
        height: 20px;
    }
`

const Archive = () => {
    const data = useStaticQuery(graphql`
        query Archive {
            allMarkdownRemark(
                sort: { fields: frontmatter___date, order: DESC }
            ) {
                edges {
                    node {
                        frontmatter {
                            name
                            date(formatString: "YYYY")
                            job
                            based
                            img {
                                childImageSharp {
                                    fluid(
                                        maxWidth: 800
                                        quality: 100
                                        grayscale: true
                                    ) {
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
        <ArchiveStyled id="archivio">
            {/* <GridStyle>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </GridStyle> */}
            <ArchiveControls />
            <ArchiveLabels />
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <ArchiveElement designer={node} />
            ))}
        </ArchiveStyled>
    )
}

const ArchiveLabelsStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1.2222222222222223rem;
    margin-bottom: 0.4444444444444444rem;

    span {
        font-family: 'Suisse Intl', serif;
        font-weight: 400;
        color: var(--accent-color);
        font-size: 0.6666666666666666rem;
        line-height: 1.3333333333333333rem;
    }

    .archive-labels-year {
        grid-column: 1/2;
    }

    .archive-labels-name {
        grid-column: 2/7;
    }

    .archive-labels-job {
        grid-column: 7/11;
    }

    .archive-labels-based {
        grid-column: 11/13;
    }
`

const ArchiveLabels = () => (
    <ArchiveLabelsStyle>
        <span className="archive-labels-year">Anno di agg.</span>
        <span className="archive-labels-name">Nome e cognome</span>
        <span className="archive-labels-job">Impiego o stato lavorativo</span>
        <span className="archive-labels-based">Con base a</span>
    </ArchiveLabelsStyle>
)

export default Archive
