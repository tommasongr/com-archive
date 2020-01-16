import React from 'react'
import styled from 'styled-components'

// import NonStretchedImage from './non-stretched-image'
import CloseCard from './close-card'

const ArchiveElementCardExtrasElementCardStyle = styled.div`
    grid-column: 1/12;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(11, 1fr);
    grid-column-gap: 1.2222222222222223rem;
    margin-top: 1.1111111111111112rem;

    .archive-element-card-extras-element-card-content {
        grid-column: 2/7;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-column-gap: 1.2222222222222223rem;
        margin-bottom: 2.7777777777777777rem;

        h3 {
            grid-column: 1/6;
            margin-top: 1.3888888888888888rem;
        }

        p {
            grid-column: 1/6;
            margin-bottom: 1.1111111111111112rem;
        }

        p:last-of-type {
            margin-bottom: 0;
        }

        @media screen and (max-width: 1024px) {
            grid-column: 2/8;
        }

        @media screen and (max-width: 900px) {
            grid-column: 1/12;
        }
    }
`

const ArchiveElementCardProjectsExtrasCardCloseCard = styled(CloseCard)`
    grid-column: 2/12;

    @media screen and (max-width: 900px) {
        grid-column: 1/12;
    }
`

const ArchiveElementCardExtrasElementCard = ({
    extras,
    toggleCard,
    extrasCardOpen,
}) => (
    <ArchiveElementCardExtrasElementCardStyle
        className={
            extrasCardOpen === false
                ? 'fade-up-animation-hidden'
                : 'fade-up-animation-show'
        }
    >
        <div
            className="archive-element-card-extras-element-card-content"
            dangerouslySetInnerHTML={{ __html: extras.html }}
        />
        <ArchiveElementCardProjectsExtrasCardCloseCard
            toggleCard={toggleCard}
        />
    </ArchiveElementCardExtrasElementCardStyle>
)

export default ArchiveElementCardExtrasElementCard
