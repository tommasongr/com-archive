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
                        id
                        frontmatter {
                            name
                            job {
                                type
                                company
                            }
                            jobFields
                            based {
                                country
                                city
                            }
                            awards
                            date(formatString: "YYYY")
                            img {
                                childImageSharp {
                                    fluid(maxWidth: 800, quality: 100) {
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
            archiveJob: '',
            archiveJobFields: '',
            archiveAbroad: false,
            archiveAwards: false,
        }
    }

    searchArchive(query) {
        this.setState({
            archiveSearch: query.target.value,
        })
    }

    filterArchiveJob(value) {
        this.setState({
            archiveJob: value.target.value,
        })
    }

    filterArchiveJobFields(query) {
        this.setState({
            archiveJobFields: query.target.value,
        })
    }

    filterArchiveAbroad() {
        this.setState(prevState => ({
            archiveAbroad: !prevState.archiveAbroad,
        }))
    }

    filterArchiveAwards() {
        this.setState(prevState => ({
            archiveAwards: !prevState.archiveAwards,
        }))
    }

    render() {
        const { data } = this.props
        return (
            <ArchiveStyle id="archivio">
                <ArchiveControls
                    archiveSearch={this.state.archiveSearch}
                    searchArchive={this.searchArchive.bind(this)}
                    filterArchiveJob={this.filterArchiveJob.bind(this)}
                    filterArchiveJobFields={this.filterArchiveJobFields.bind(
                        this
                    )}
                    filterArchiveAbroad={this.filterArchiveAbroad.bind(this)}
                    filterArchiveAwards={this.filterArchiveAwards.bind(this)}
                />
                <ArchiveLabels />
                {data.allMarkdownRemark.edges
                    .filter(({ node }) =>
                        this.state.archiveSearch !== ''
                            ? node.frontmatter.name
                                  .toLowerCase()
                                  .includes(
                                      this.state.archiveSearch.toLowerCase()
                                  ) ||
                              node.frontmatter.job.company
                                  .toLowerCase()
                                  .includes(
                                      this.state.archiveSearch.toLowerCase()
                                  )
                            : node
                    )
                    .filter(({ node }) =>
                        this.state.archiveJob !== ''
                            ? this.state.archiveJob ===
                              node.frontmatter.job.type
                            : node
                    )
                    .filter(({ node }) =>
                        this.state.archiveJobFields !== ''
                            ? node.frontmatter.jobFields.includes(
                                  this.state.archiveJobFields
                              )
                            : node
                    )
                    .filter(({ node }) =>
                        this.state.archiveAbroad === true
                            ? node.frontmatter.based.country !== 'Italia'
                            : node
                    )
                    .filter(({ node }) =>
                        this.state.archiveAwards === true
                            ? node.frontmatter.awards === true
                            : node
                    )
                    .map(({ node }) => (
                        <ArchiveElement
                            designer={node}
                            key={node.id}
                            id={node.frontmatter.name.toLowerCase()}
                        />
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
