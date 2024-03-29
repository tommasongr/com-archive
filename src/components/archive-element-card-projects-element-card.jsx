import React from 'react'
import styled from 'styled-components'

import NonStretchedImage from './non-stretched-image'
import CloseCard from './close-card'

const ArchiveElementCardProjectsElementCardStyle = styled.div`
    grid-column: 1/12;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(11, 1fr);
    grid-column-gap: 1.2222222222222223rem;
    margin-top: 1.1111111111111112rem;

    .archive-element-card-projects-element-card-content {
        grid-column: 2/7;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-column-gap: 1.2222222222222223rem;
        margin-bottom: 2.7777777777777777rem;

        p:first-of-type {
            grid-column: 1/6;
            margin-bottom: 2.2222222222222223rem;
        }

        p:not(:first-child) {
            grid-column: 1/5;
            color: var(--accent-color);
            font-family: 'Suisse Intl', sans-serif;
            font-size: 0.7777777777777778rem;
            line-height: 1.2222222222222223rem;
        }

        @media screen and (max-width: 1024px) {
            grid-column: 2/8;
        }

        @media screen and (max-width: 900px) {
            grid-column: 1/12;
        }
    }

    .archive-element-card-projects-element-card-images {
        grid-column: 2/12;
        display: grid;
        grid-row-gap: 1.2222222222222223rem;

        @media screen and (max-width: 900px) {
            grid-column: 1/12;
        }
    }

    .archive-element-card-projects-element-card-copyright-notice {
        font-family: 'Suisse Intl', sans-serif;
        font-size: 0.6666666666666666rem;
        line-height: 1.1111111111111112rem;
        font-style: italic;
        margin-top: 1.1111111111111112rem;
        grid-column: 2/12;
        opacity: 0.8;

        @media screen and (max-width: 900px) {
            grid-column: 1/12;
        }
    }
`

const ArchiveElementCardProjectsElementCardCloseCard = styled(CloseCard)`
    grid-column: 2/12;

    @media screen and (max-width: 900px) {
        grid-column: 1/12;
    }
`

const ArchiveElementCardProjectsElementCard = ({
    project,
    toggleCard,
    projectsCardOpen,
}) => (
    <ArchiveElementCardProjectsElementCardStyle
        className={
            projectsCardOpen === false
                ? 'fade-up-animation-hidden'
                : 'fade-up-animation-show'
        }
    >
        <div
            className="archive-element-card-projects-element-card-content"
            dangerouslySetInnerHTML={{ __html: project.html }}
        />
        <div className="archive-element-card-projects-element-card-images">
            {project.frontmatter.images.map(image => (
                <NonStretchedImage
                    fluid={image.childImageSharp.fluid}
                    imgStyle={{ objectFit: 'cover', objectPosition: '0 0' }}
                    style={{ gridColumn: '1/2' }}
                    key={image.id}
                />
            ))}
        </div>
        {project.frontmatter.images_copyright.controll === true && (
            <span className="archive-element-card-projects-element-card-copyright-notice">
                Per le immagini sopra riportate Copyright ©
                {' ' + project.frontmatter.designer}
            </span>
        )}
        <ArchiveElementCardProjectsElementCardCloseCard
            toggleCard={toggleCard}
        />
    </ArchiveElementCardProjectsElementCardStyle>
)

export default ArchiveElementCardProjectsElementCard
