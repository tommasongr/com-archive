import React from 'react'
import styled from 'styled-components'

import ArchiveElementCard from './archive-element-card'

const ArchiveElementStyle = styled.div`
    width: 100%;
    border-top: solid 1px var(--text-color);

    :last-of-type {
        border-bottom: solid 1px var(--text-color);
    }

    .archive-element-button {
        width: 100%;
        height: 3.111111111111111rem;
        align-items: center;
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
            grid-template-columns: repeat(12, 1fr);
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

            .archive-element-year {
                grid-column: 1/2;
            }

            .archive-element-name {
                grid-column: 2/7;
                font-weight: 600;
            }

            .archive-element-job {
                grid-column: 7/11;
            }

            .archive-element-based {
                grid-column: 11/13;
            }
        }
    }
`

class ArchiveElement extends React.Component {
    constructor(props) {
        super(props)
        this.toggleElementCard = this.toggleElementCard.bind(this)
        this.state = {
            open: false,
        }
    }

    toggleElementCard() {
        this.setState(prevState => ({
            open: !prevState.open,
        }))
    }

    componentDidUpdate(previousProps, previousState) {
        if (previousState.open !== this.state.open) {
            document.getElementById(this.props.designer.id).scrollIntoView({
                behavior: 'smooth',
            })
        }

        document
            .querySelectorAll('.archive-element-card-content a')
            .forEach(function(elem) {
                elem.setAttribute('target', 'blank')
            })
    }

    render() {
        const { designer } = this.props
        return (
            <ArchiveElementStyle>
                <button
                    className="archive-element-button"
                    onClick={this.toggleElementCard}
                    id={designer.id}
                >
                    <span>
                        <span
                            className="archive-element-year"
                            style={
                                this.state.open
                                    ? { color: 'var(--accent-color)' }
                                    : { color: '' }
                            }
                        >
                            {designer.frontmatter.date}
                        </span>
                        <span
                            className="archive-element-name"
                            style={
                                this.state.open
                                    ? { color: 'var(--accent-color)' }
                                    : { color: '' }
                            }
                        >
                            {designer.frontmatter.name}
                        </span>
                        <span
                            className="archive-element-job"
                            style={
                                this.state.open
                                    ? { color: 'var(--accent-color)' }
                                    : { color: '' }
                            }
                        >
                            {designer.frontmatter.job.company === '-'
                                ? 'Freelancer'
                                : designer.frontmatter.job.company}
                        </span>
                        <span
                            className="archive-element-based"
                            style={
                                this.state.open
                                    ? { color: 'var(--accent-color)' }
                                    : { color: '' }
                            }
                        >
                            {designer.frontmatter.based.city}
                        </span>
                    </span>
                </button>
                {this.state.open && (
                    <ArchiveElementCard
                        designer={designer}
                        toggleCard={this.toggleElementCard}
                    />
                )}
            </ArchiveElementStyle>
        )
    }
}

export default ArchiveElement
