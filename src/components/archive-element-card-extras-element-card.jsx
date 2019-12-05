import React from 'react'
import styled from 'styled-components'

import NonStretchedImage from './non-stretched-image'
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

        // p:not(:first-child) {
        //     grid-column: 1/5;
        //     color: var(--accent-color);
        //     font-family: 'Suisse Intl', sans-serif;
        //     font-size: 0.7777777777777778rem;
        //     line-height: 1.2222222222222223rem;
        // }
    }

    .archive-element-card-extras-element-card-images {
        grid-column: 2/12;
        display: grid;
        grid-row-gap: 1.2222222222222223rem;
    }
`

const ArchiveElementCardExtrasElementCard = ({ extras, toggleCard }) => (
    <ArchiveElementCardExtrasElementCardStyle>
        <div
            className="archive-element-card-extras-element-card-content"
            dangerouslySetInnerHTML={{ __html: extras.html }}
        />
        {/* {console.log(extras.frontmatter.images)}
        <div className="archive-element-card-extras-element-card-images">
            {extras.frontmatter.images.map(image => (
                <NonStretchedImage
                    fluid={image.childImageSharp.fluid}
                    imgStyle={{ objectFit: 'cover', objectPosition: '0 0' }}
                    style={{ gridColumn: '1/2' }}
                />
            ))}
        </div> */}
        <CloseCard column="2/12" toggleCard={toggleCard} />
    </ArchiveElementCardExtrasElementCardStyle>
)

export default ArchiveElementCardExtrasElementCard
