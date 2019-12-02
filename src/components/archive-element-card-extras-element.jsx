import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import NonStretchedImage from './non-stretched-image'

const ArchiveElementCardExtrasElementStyle = styled.div`
    grid-column: 1/12;
    width: 100%;
    border-top: solid 1px var(--text-color);

    :last-of-type {
        border-bottom: solid 1px var(--text-color);
    }

    .archive-element-card-projects-element-button {
        width: 100%;
        height: 3.111111111111111rem;
        cursor: pointer;

        :hover {
            span {
                color: var(--accent-color);
            }
        }

        :focus {
            span {
                color: var(--accent-color);
            }
        }

        :active {
            outline: none;
        }

        span {
            display: grid;
            grid-template-columns: repeat(11, 1fr);
            grid-gap: 1.2222222222222223rem;
            color: var(--text-color);

            span {
                font-size: 1.1111111111111112rem;
                line-height: 1.7777777777777777rem;
                font-weight: 400;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .archive-element-card-proextrasjects-element-year {
                grid-column: 1/2;
            }

            .archive-element-card-extras-element-name {
                grid-column: 2/6;
                font-weight: 600;
            }

            .archive-element-card-extras-element-content-type {
                grid-column: 6/10;
            }

            .archive-element-card-extras-element-timing {
                grid-column: 10/12;
            }
        }
    }
`

class ArchiveElementCardExtrasElement extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { extras } = this.props
        return (
            <ArchiveElementCardExtrasElementStyle>
                <button className="archive-element-card-projects-element-button">
                    <span>
                        <span className="archive-element-card-proextrasjects-element-year">
                            {extras.frontmatter.date}
                        </span>
                        <span className="archive-element-card-extras-element-name">
                            {extras.frontmatter.name}
                        </span>
                        <span className="archive-element-card-extras-element-content-type">
                            {extras.frontmatter.content_type}
                        </span>
                        <span className="archive-element-card-extras-element-timing">
                            {extras.timeToRead} min
                        </span>
                        {/* <NonStretchedImage
                            fluid={
                                project.frontmatter.thumbnail.childImageSharp
                                    .fluid
                            }
                            imgStyle={{
                                objectFit: 'contain',
                                objectPosition: '100% 0',
                            }}
                            style={{
                                gridColumn: '10/12',
                            }}
                        /> */}
                    </span>
                </button>
            </ArchiveElementCardExtrasElementStyle>
        )
    }
}

export default ArchiveElementCardExtrasElement
