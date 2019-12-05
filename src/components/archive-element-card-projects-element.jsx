import React from 'react'
import styled from 'styled-components'

import ArchiveElementCardProjectsElementCard from './archive-element-card-projects-element-card'

import NonStretchedImage from './non-stretched-image'

const ArchiveElementCardProjectsElementStyle = styled.div`
    grid-column: 1/12;
    width: 100%;
    border-top: solid 1px var(--text-color);
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-column-gap: 1.2222222222222223rem;

    :last-of-type {
        border-bottom: solid 1px var(--text-color);
    }

    .archive-element-card-projects-element-button {
        grid-column: 1/12;
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

        .archive-element-card-projects-element-button-content {
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
        this.toggleElementCardProjectsElementCard = this.toggleElementCardProjectsElementCard.bind(
            this
        )
        this.state = {
            elementCardProjectsElementCardOpend: false,
        }
    }

    toggleElementCardProjectsElementCard() {
        this.setState(prevState => ({
            elementCardProjectsElementCardOpend: !prevState.elementCardProjectsElementCardOpend,
        }))
    }

    render() {
        const { project } = this.props
        return (
            <ArchiveElementCardProjectsElementStyle>
                <button
                    className="archive-element-card-projects-element-button"
                    onClick={this.toggleElementCardProjectsElementCard}
                >
                    <span className="archive-element-card-projects-element-button-content">
                        <span
                            className="archive-element-card-projects-element-year"
                            style={
                                this.state.elementCardProjectsElementCardOpend
                                    ? { color: 'var(--accent-color)' }
                                    : { color: '' }
                            }
                        >
                            {project.frontmatter.year}
                        </span>
                        <span
                            className="archive-element-card-projects-element-name"
                            style={
                                this.state.elementCardProjectsElementCardOpend
                                    ? { color: 'var(--accent-color)' }
                                    : { color: '' }
                            }
                        >
                            {project.frontmatter.name}
                        </span>
                        <span
                            className="archive-element-card-projects-element-client"
                            style={
                                this.state.elementCardProjectsElementCardOpend
                                    ? { color: 'var(--accent-color)' }
                                    : { color: '' }
                            }
                        >
                            {project.frontmatter.client}
                        </span>
                        <NonStretchedImage
                            fluid={
                                project.frontmatter.preview.childImageSharp
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
                {this.state.elementCardProjectsElementCardOpend && (
                    <ArchiveElementCardProjectsElementCard
                        project={project}
                        toggleCard={this.toggleElementCardProjectsElementCard}
                    />
                )}
            </ArchiveElementCardProjectsElementStyle>
        )
    }
}

export default ArchiveElementCardProjectsElement
