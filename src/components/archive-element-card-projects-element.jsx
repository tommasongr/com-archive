import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import NonStretchedImage from './non-stretched-image'

const ArchiveElementCardProjectsElementStyle = styled.div`
    grid-column: 1/12;
    width: 100%;
    border-top: solid 1px var(--text-color);

    :last-of-type {
        border-bottom: solid 1px var(--text-color);
    }

    .archive-element-card-projects-element-button {
        width: 100%;
        height: calc(3.111111111111111rem * 3);
        cursor: pointer;
        padding: 0.6666666666666666rem 0;

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
            height: 100%;

            span {
                font-size: 1.1111111111111112rem;
                line-height: 1.7777777777777777rem;
                font-weight: 400;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .archive-element-card-projects-element-year {
                grid-column: 1/2;
            }

            .archive-element-card-projects-element-name {
                grid-column: 2/6;
                font-weight: 600;
            }

            .archive-element-card-projects-element-client {
                grid-column: 6/10;
            }
        }
    }
`

class ArchiveElementCardProjectsElement extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { project } = this.props
        return (
            <ArchiveElementCardProjectsElementStyle>
                <button className="archive-element-card-projects-element-button">
                    <span>
                        <span className="archive-element-card-projects-element-year">
                            {project.frontmatter.year}
                        </span>
                        <span className="archive-element-card-projects-element-name">
                            {project.frontmatter.name}
                        </span>
                        <span className="archive-element-card-projects-element-client">
                            {project.frontmatter.client}
                        </span>
                        <NonStretchedImage
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
                        />
                    </span>
                </button>
            </ArchiveElementCardProjectsElementStyle>
        )
    }
}

export default ArchiveElementCardProjectsElement
