import React from 'react'
import { graphql } from 'gatsby'
import NonStretchedImage from '../components/non-stretched-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import IconLinkedin from '../components/social-icons/icon-linkedin'
import IconTwitter from '../components/social-icons/icon-twitter'
import IconFacebook from '../components/social-icons/icon-facebook'

const ConversationTemplateStyle = styled.div`
    .conversations-element {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 4.444444444444445rem;

        .conversations-element-text {
            grid-column: 1/3;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-auto-rows: min-content min-content 1fr;

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
                margin-bottom: 1.6666666666666667rem;
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

        .conversations-element-content {
            grid-column: 1/4;
            max-width: 38.888888888888886rem;
            margin: 0 auto;

            h3 {
                font-size: 1.1111111111111112rem;
                line-height: 1.7777777777777777rem;
                margin-bottom: 1.1111111111111112rem;
                margin-top: 1.3888888888888888rem;
            }

            p {
                margin-bottom: 1.1111111111111112rem;
            }

            p:last-of-type {
                margin-bottom: 0;
            }
        }
    }
`

const ConversationTemplate = ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout>
            <ConversationTemplateStyle>
                <div className="conversations-element">
                    <div className="conversations-element-text">
                        <h2>{post.frontmatter.name}</h2>
                        <h3>Con {post.frontmatter.designer}</h3>
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
                            post.frontmatter.conv_bitmap.childImageSharp.fluid
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
                    <div
                        dangerouslySetInnerHTML={{ __html: post.html }}
                        className="conversations-element-content"
                    />
                </div>
            </ConversationTemplateStyle>
        </Layout>
    )
}
export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                name
                designer
                conv_bitmap {
                    childImageSharp {
                        fluid(
                            maxWidth: 500
                            duotone: { highlight: "#ee0202", shadow: "#ee0202" }
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
`

export default ConversationTemplate
