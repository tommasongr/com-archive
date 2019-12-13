import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'
import NonStretchedImage from './non-stretched-image'
import styled from 'styled-components'

// import SocialIcon from './social-icon'

import TwitterIcon from '../icons/twitter.svg'
import InstagramIcon from '../icons/instagram.svg'
import GithubIcon from '../icons/github.svg'
import BehanceIcon from '../icons/behance.svg'

const HeroStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 1.2222222222222223rem;
    height: calc(100vh - 7.222222222222222rem);
    position: relative;
    margin-bottom: 1.1111111111111112rem;

    #hero-text-container {
        grid-column: 1/8;
        grid-row: 1/2;
    }

    #hero-social {
        display: flex;

        img {
            margin-right: 1.1111111111111112rem;
            stroke-color: var(--accent-color);
        }
    }

    #hero-special {
        grid-column: 1/4;
        grid-row: 2/3;
        align-self: end;
        margin-bottom: 3.3333333333333335rem;

        span:first-of-type {
            font-size: 0.8888888888888888rem;
            line-height: 1.5555555555555556rem;
        }

        #hero-special-designer,
        #hero-special-title {
            font-size: 1.1111111111111112rem;
            line-height: 1.7777777777777777rem;
            color: var(--accent-color);
            text-decoration: underline;
            font-weight: 500;
        }

        #hero-special-title {
            font-style: italic;
        }
    }

    #hero-arrows-container {
        position: absolute;
        align-self: end;
        justify-self: center;
        margin-bottom: 2.333rem;
        padding: 1.3888888888888888rem;
        cursor: pointer;
        height: 21px;
        width: 11px;

        #hero-arrows {
            width: 0;
            height: 0;
            border-left: 5.5px solid transparent;
            border-right: 5.5px solid transparent;
            border-top: 11px solid var(--text-color);
            animation: pulse 1s ease-in-out alternate infinite;
            position: absolute;
        }

        :hover {
            #hero-arrows {
                border-top-color: var(--accent-color);
            }
        }
    }

    @keyframes pulse {
        0% {
            bottom: calc(1.3888888888888888rem + 11px);
        }
        100% {
            bottom: 1.3888888888888888rem;
        }
    }
`

function scrollToArchive() {
    document.querySelector('#archivio').scrollIntoView({
        behavior: 'smooth',
    })
}

const Hero = () => {
    const data = useStaticQuery(graphql`
        query HeroImage {
            file(relativePath: { eq: "beatrice-2.png" }) {
                childImageSharp {
                    fluid(
                        maxWidth: 1000
                        duotone: { highlight: "#ee0202", shadow: "#ee0202" }
                    ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <HeroStyle>
            <div id="hero-text-container">
                <h1>
                    Un archivio di laureati in Design della
                    <br /> Comunicazione al Politecnico di Milano, <br />
                    che fanno la differenza.
                </h1>
                <h2>
                    Designer, progetti, conversazioni <br /> e altri contenuti
                    speciali raccolti <br />
                    in un unico luogo.
                </h2>
                <div id="hero-social">
                    {/* <SocialIcon /> */}
                    <img src={TwitterIcon} alt="" />
                    <img src={InstagramIcon} alt="" />
                    <img src={GithubIcon} alt="" />
                    <img src={BehanceIcon} alt="" />
                </div>
            </div>
            <div id="hero-special">
                <span>
                    In conversazione con <br />
                </span>
                <button id="hero-special-button">
                    <span id="hero-special-designer">
                        Beatrice D'Agostino <br />
                    </span>
                    <span id="hero-special-title">
                        Il type design in Italia <br />
                    </span>
                </button>
            </div>
            <div id="hero-arrows-container" onClick={scrollToArchive}>
                <div id="hero-arrows"></div>
            </div>
            <NonStretchedImage
                fluid={data.file.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
                style={{
                    gridColumn: '8/13',
                    gridRow: '1/3',
                    justifySelf: 'end',
                    width: '100%',
                    alignSelf: 'end',
                }}
            />
        </HeroStyle>
    )
}

export default Hero
