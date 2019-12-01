import React from 'react'
import styled from 'styled-components'

import ArchiveElementCard from './archive-element-card'

const ArchiveElementStyle = styled.div`
    width: 100%;
    // height: 100%;
    border-top: solid 1px var(--text-color);

    :last-of-type {
        border-bottom: solid 1px var(--text-color);
    }

    .archive-element-button {
        width: 100%;
        height: 3.111111111111111rem;
        align-items: center;
        cursor: pointer;

        span {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-gap: 1.2222222222222223rem;
        }

        :hover {
            color: var(--accent-color);
        }

        :focus {
            color: var(--accent-color);
        }

        :active {
            outline: none;
        }
    }

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

    render() {
        const { designer } = this.props
        return (
            <ArchiveElementStyle>
                <button
                    className="archive-element-button"
                    onClick={this.toggleElementCard}
                >
                    <span>
                        <span className="archive-element-year">
                            {designer.frontmatter.date}
                        </span>
                        <span className="archive-element-name">
                            {designer.frontmatter.name}
                        </span>
                        <span className="archive-element-job">
                            {designer.frontmatter.job}
                        </span>
                        <span className="archive-element-based">
                            {designer.frontmatter.based}
                        </span>
                    </span>
                </button>
                {this.state.open && <ArchiveElementCard designer={designer} />}
            </ArchiveElementStyle>
        )
    }
}

// const ArchiveElement = ({ designer }) => (

// )

export default ArchiveElement
