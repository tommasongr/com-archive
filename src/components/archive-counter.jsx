import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const ArchiveCounterStyle = styled.div`
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span {
        color: var(--accent-color);
        margin-bottom: 15px;
        font-size: 14px;
        line-height: 22px;
        font-family: Suisse Intl, sans-serif;

        :first-of-type {
            font-weight: 600;
        }

        :last-of-type {
            font-style: italic;
            margin-top: 30px;
        }
    }
`

const ArchiveCounter = () => {
    const data = useStaticQuery(graphql`
        query ArchiveCounter {
            allFile(
                filter: { absolutePath: { regex: "/contents/" } }
                sort: { fields: changeTime, order: DESC }
            ) {
                edges {
                    node {
                        relativeDirectory
                        childMarkdownRemark {
                            frontmatter {
                                content_type
                            }
                        }
                        changeTime(formatString: "DD/MM/YYYY")
                    }
                }
            }
        }
    `)

    let ArchiveCounterDesigners = 0
    let ArchiveCounterProjects = 0
    let ArchiveCounterConversations = 0

    return (
        <ArchiveCounterStyle>
            {data.allFile.edges.forEach(element => {
                if (element.node.relativeDirectory === 'designers') {
                    ArchiveCounterDesigners++
                } else if (element.node.relativeDirectory === 'projects') {
                    ArchiveCounterProjects++
                } else if (
                    element.node.relativeDirectory === 'extras' &&
                    element.node.childMarkdownRemark.frontmatter
                        .content_type === 'Conversazione'
                ) {
                    ArchiveCounterConversations++
                }
            })}
            <span>Presenti in archivio</span>
            <span>
                <strong>{ArchiveCounterDesigners} </strong> designer
            </span>
            <span>
                <strong>{ArchiveCounterProjects} </strong> progetti
            </span>
            <span>
                <strong>{ArchiveCounterConversations} </strong>
                conversazioni
            </span>
            <span>
                Ultimo aggiornamento{' '}
                <strong>{data.allFile.edges[0].node.changeTime}</strong>
            </span>
        </ArchiveCounterStyle>
    )
}

export default ArchiveCounter
