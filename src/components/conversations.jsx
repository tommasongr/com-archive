import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const ConversationsStyle = styled.div``

const Conversations = () => {
    const data = useStaticQuery(graphql`
        query Conversations {
            allMarkdownRemark(
                filter: {
                    fileAbsolutePath: { regex: "/extras/" }
                    frontmatter: { content_type: { eq: "Conversazione" } }
                }
            ) {
                edges {
                    node {
                        frontmatter {
                            name
                        }
                        html
                        excerpt
                    }
                }
            }
        }
    `)

    return (
        <ConversationsStyle>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div>
                    <h2>{node.frontmatter.name}</h2>
                    <p>{node.excerpt}</p>
                    {/* <div
                        className="archive-element-card-extras-element-card-content"
                        dangerouslySetInnerHTML={{ __html: node.html }}
                    /> */}
                </div>
            ))}
        </ConversationsStyle>
    )
}

export default Conversations
