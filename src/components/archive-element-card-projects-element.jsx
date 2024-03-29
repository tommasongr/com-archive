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
        /* height: calc(3.111111111111111rem * 3); */
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

            @media screen and (max-width: 900px) {
                .archive-element-card-projects-element-year {
                    display: none;
                }

                .archive-element-card-projects-element-name {
                    grid-column: 1/8;
                }

                .archive-element-card-projects-element-client {
                    display: none;
                }
            }

            @media screen and (max-width: 470px) {
                .archive-element-card-projects-element-name {
                    grid-column: 1/13;
                }
            }
        }
    }
`

const ArchiveElementCardProjectsElementProjectImage = styled(NonStretchedImage)`
    grid-column: 10/12;

    @media screen and (max-width: 900px) {
        grid-column: 8/12;
    }

    @media screen and (max-width: 470px) {
        display: none;
    }
`

class ArchiveElementCardProjectsElement extends React.Component {
    constructor(props) {
        super(props)
        this.toggleElementCardProjectsElementCard = this.toggleElementCardProjectsElementCard.bind(
            this
        )
        this.state = {
            elementCardProjectsElementCardOpened: false,
        }
    }

    toggleElementCardProjectsElementCard() {
        this.setState(prevState => ({
            elementCardProjectsElementCardOpened: !prevState.elementCardProjectsElementCardOpened,
        }))
    }

    componentDidUpdate() {
        document.getElementById(this.props.project.id).scrollIntoView({
            behavior: 'smooth',
        })

        document
            .querySelectorAll(
                '.archive-element-card-projects-element-card-content a'
            )
            .forEach(function(elem) {
                elem.setAttribute('target', 'blank')
            })
    }

    render() {
        const { project } = this.props
        return (
            <ArchiveElementCardProjectsElementStyle>
                <button
                    className="archive-element-card-projects-element-button"
                    onClick={this.toggleElementCardProjectsElementCard}
                    id={project.id}
                >
                    <span className="archive-element-card-projects-element-button-content">
                        <span
                            className="archive-element-card-projects-element-year"
                            style={
                                this.state.elementCardProjectsElementCardOpened
                                    ? { color: 'var(--accent-color)' }
                                    : { color: '' }
                            }
                        >
                            {project.frontmatter.year}
                        </span>
                        <span
                            className="archive-element-card-projects-element-name"
                            style={
                                this.state.elementCardProjectsElementCardOpened
                                    ? { color: 'var(--accent-color)' }
                                    : { color: '' }
                            }
                        >
                            {project.frontmatter.name}
                        </span>
                        <span
                            className="archive-element-card-projects-element-client"
                            style={
                                this.state.elementCardProjectsElementCardOpened
                                    ? { color: 'var(--accent-color)' }
                                    : { color: '' }
                            }
                        >
                            {project.frontmatter.client}
                        </span>
                        <ArchiveElementCardProjectsElementProjectImage
                            fluid={
                                project.frontmatter.preview.childImageSharp
                                    .fluid
                            }
                            imgStyle={{
                                objectFit: 'contain',
                                objectPosition: '100% 0',
                            }}
                        />
                    </span>
                </button>
                {this.state.elementCardProjectsElementCardOpened && (
                    <ArchiveElementCardProjectsElementCard
                        project={project}
                        toggleCard={this.toggleElementCardProjectsElementCard}
                        projectsCardOpen={
                            this.state.elementCardProjectsElementCardOpened
                        }
                    />
                )}
            </ArchiveElementCardProjectsElementStyle>
        )
    }
}

export default ArchiveElementCardProjectsElement
