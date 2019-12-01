import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const ArchiveElementCardStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 1.2222222222222223rem;
    margin-top: 1.1111111111111112rem;
    margin-bottom: 3.111111111111111rem;

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

const ArchiveElementCard = ({ designer }) => (
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
                justifySelf: 'end',
                width: '100%',
            }}
        />
    </ArchiveElementCardStyle>
)

const NonStretchedImage = props => {
    let normalizedProps = props
    if (
        props.fluid &&
        props.fluid.presentationWidth &&
        props.fluid.presentationHeight
    ) {
        normalizedProps = {
            ...props,
            style: {
                ...(props.style || {}),
                maxWidth: props.fluid.presentationWidth,
            },
        }
    }

    return <Img {...normalizedProps} />
}

export default ArchiveElementCard
