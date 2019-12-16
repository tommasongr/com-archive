import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import NonStretchedImage from './non-stretched-image'
import styled from 'styled-components'

import IconLinkedin from '../components/social-icons/icon-linkedin'
import IconTwitter from '../components/social-icons/icon-twitter'
import IconFacebook from '../components/social-icons/icon-facebook'

const ConversationsStyle = styled.div`
    grid-column: 1/13;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 4.444444444444445rem;
    margin-top: 4.444444444444445rem;

    .conversations-element {
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        .conversations-element-text {
            grid-column: 1/3;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-auto-rows: min-content min-content min-content 1fr;

            h2 {
                font-weight: 600;
                font-size: 2.111111111111111rem;
                line-height: 2.7777777777777777rem;
                // margin-bottom: 1.6666666666666667rem;
                font-size: 70px;
                line-height: 82px;
                grid-column: 1/3;
            }

            h3 {
                margin-top: 0;
                font-size: 2.111111111111111rem;
                line-height: 2.2222222222222223rem;
                font-weight: 500;
                font-style: italic;
                margin-bottom: 2.7777777777777777rem;
            }

            .conversations-element-share {
                grid-column: 1/3;
                align-self: end;

                span {
                    font-size: 0.8888888888888888rem;
                    line-height: 1.5555555555555556rem;
                    font-family: 'Suisse Intl', sans-serif;
                    color: var(--accent-color);
                }

                div {
                    display: flex;
                    margin-top: 0.2777777777777778rem;

                    a {
                        margin-right: 0.8333333333333334rem;

                        :last-of-type {
                            margin-right: 0;
                        }
                    }

                    svg {
                        width: 1.9444444444444444rem;
                        height: auto;
                    }
                }
            }
        }

        .conversations-element-divider {
            grid-column: 1/4;
            width: 100%;
            margin-top: 4.444444444444445rem;
            border-bottom: solid 1px var(--accent-color);
        }
    }
`

const Conversations = () => {
    const data = useStaticQuery(graphql`
        query Conversations {
            allMarkdownRemark(
                filter: {
                    fileAbsolutePath: { regex: "/extras/" }
                    frontmatter: { content_type: { eq: "Conversazione" } }
                }
                sort: { fields: frontmatter___date, order: DESC }
            ) {
                edges {
                    node {
                        id
                        fields {
                            slug
                        }
                        frontmatter {
                            name
                            designer
                            conv_bitmap {
                                childImageSharp {
                                    fluid(
                                        maxWidth: 500
                                        duotone: {
                                            highlight: "#ee0202"
                                            shadow: "#ee0202"
                                        }
                                    ) {
                                        ...GatsbyImageSharpFluid
                                        presentationWidth
                                    }
                                }
                            }
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
                <div className="conversations-element" key={node.id}>
                    <div className="conversations-element-text">
                        <h2>{node.frontmatter.name}</h2>
                        <h3>Con {node.frontmatter.designer}</h3>
                        <Link
                            to={node.fields.slug}
                            style={{
                                fontFamily: 'Suisse Intl, sans-serif',
                                color: 'var(--accent-color)',
                                gridColumn: '1/2',
                            }}
                        >
                            Scopri di più
                        </Link>
                        <div className="conversations-element-share">
                            <span>Condividi su</span>
                            <div>
                                <IconLinkedin socialLink="" />
                                <IconTwitter socialLink="" />
                                <IconFacebook socialLink="" />
                            </div>
                        </div>
                    </div>

                    <NonStretchedImage
                        fluid={
                            node.frontmatter.conv_bitmap.childImageSharp.fluid
                        }
                        imgStyle={{
                            objectFit: 'contain',
                        }}
                        style={{
                            justifySelf: 'end',
                            width: '100%',
                            alignSelf: 'end',
                        }}
                    />

                    <div className="conversations-element-divider"></div>
                </div>
            ))}
        </ConversationsStyle>
    )
}

export default Conversations
