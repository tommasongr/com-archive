import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import ArchiveControls from '../components/archive-controls'
import ArchiveElement from '../components/archive-element'

const ArchiveStyle = styled.div``

const Archive = () => {
    const data = useStaticQuery(graphql`
        query Archive {
            allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/designers/" } }
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

    return <ArchiveState data={data}></ArchiveState>
}

class ArchiveState extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            archiveSearch: '',
        }
    }

    searchArchive(query) {
        this.setState({
            archiveSearch: query.target.value,
        })
    }

    render() {
        const { data } = this.props
        const { archiveSearch } = this.state
        return (
            <ArchiveStyle id="archivio">
                <ArchiveControls
                    archiveSearch={this.state.archiveSearch}
                    searchArchive={this.searchArchive.bind(this)}
                />
                <ArchiveLabels />
                {archiveSearch == ''
                    ? data.allMarkdownRemark.edges.map(({ node }) => (
                          <ArchiveElement designer={node} />
                      ))
                    : data.allMarkdownRemark.edges
                          .filter(
                              ({ node }) =>
                                  node.frontmatter.name
                                      .toLowerCase()
                                      .includes(
                                          this.state.archiveSearch.toLowerCase()
                                      ) ||
                                  node.frontmatter.job
                                      .toLowerCase()
                                      .includes(
                                          this.state.archiveSearch.toLowerCase()
                                      )
                          )
                          .map(({ node }) => (
                              <ArchiveElement designer={node} />
                          ))}
            </ArchiveStyle>
        )
    }
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
