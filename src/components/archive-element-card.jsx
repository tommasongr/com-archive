import React from 'react'
import styled from 'styled-components'

import NonStretchedImage from './non-stretched-image'
import Social from './social-icon'
import CloseCard from './close-card'

import ArchiveElementCardProjects from './archive-element-card-projects'
import ArchiveElementCardExtras from './archive-element-card-extras'

const ArchiveElementCardStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 1.2222222222222223rem;
    margin-top: 1.1111111111111112rem;

    .archive-element-card-content {
        grid-column: 1/7;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-column-gap: 1.2222222222222223rem;

        p:first-of-type {
            grid-column: 2/7;
            margin-bottom: 2.2222222222222223rem;
        }

        p:not(:first-child) {
            grid-column: 2/7;
            color: var(--accent-color);
            font-family: 'Suisse Intl', sans-serif;
            font-size: 0.7777777777777778rem;
            line-height: 1.2222222222222223rem;
        }

        @media screen and (max-width: 900px) {
            p:first-of-type {
                grid-column: 1/7;
            }

            p:not(:first-child) {
                grid-column: 1/7;
            }
        }

        @media screen and (max-width: 620px) {
            grid-column: 1/13;
        }
    }
`

const ArchiveElementDesignerImage = styled(NonStretchedImage)`
    grid-column: 8/13;
    grid-row: 1/4;
    justify-self: flex-end;
    width: 100%;
    align-self: flex-start;

    @media screen and (max-width: 620px) {
        grid-column: 1/13;
        grid-row: 1/2;
        justify-self: center;
        margin-bottom: 2.2222222222222223rem;
    }
`

const ArchiveElementCloseCard = styled(CloseCard)`
    grid-column: 2/13;

    @media screen and (max-width: 900px) {
        grid-column: 1/13;
    }
`

const ArchiveElementCard = ({ designer, toggleCard, cardOpen }) => (
    <ArchiveElementCardStyle
        className={
            cardOpen === false
                ? 'fade-up-animation-hidden'
                : 'fade-up-animation-show'
        }
    >
        <div
            className="archive-element-card-content"
            dangerouslySetInnerHTML={{ __html: designer.html }}
        />
        <ArchiveElementDesignerImage
            fluid={designer.frontmatter.img.childImageSharp.fluid}
            imgStyle={{ objectFit: 'contain' }}
        />
        <Social designerSocial={designer.frontmatter.social} />

        {designer.frontmatter.contents.projects === true && (
            <ArchiveElementCardProjects designer={designer.frontmatter.name} />
        )}

        {designer.frontmatter.contents.extras === true && (
            <ArchiveElementCardExtras designer={designer.frontmatter.name} />
        )}

        <ArchiveElementCloseCard toggleCard={toggleCard} />
    </ArchiveElementCardStyle>
)

export default ArchiveElementCard
