import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import NonStretchedImage from './non-stretched-image'
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
            grid-column: 2/6;
            color: var(--accent-color);
            font-family: 'Suisse Intl', sans-serif;
            font-size: 0.7777777777777778rem;
            line-height: 1.2222222222222223rem;
        }
    }
`

const ArchiveElementCard = ({ designer, toggleCard }) => (
    <ArchiveElementCardStyle>
        <div
            className="archive-element-card-content"
            dangerouslySetInnerHTML={{ __html: designer.html }}
        />
        <NonStretchedImage
            fluid={designer.frontmatter.img.childImageSharp.fluid}
            imgStyle={{ objectFit: 'contain', objectPosition: '0 0' }}
            style={{
                gridColumn: '10/13',
                gridRow: '1/3',
            }}
        />
        {console.log(designer.frontmatter.projects)}
        {designer.frontmatter.projects.length != 0 && (
            <ArchiveElementCardProjects designer={designer.frontmatter.name} />
        )}
        {designer.frontmatter.extras.length != 0 && (
            <ArchiveElementCardExtras designer={designer.frontmatter.name} />
        )}
        <CloseCard column="2/13" toggleCard={toggleCard} />
    </ArchiveElementCardStyle>
)

export default ArchiveElementCard
