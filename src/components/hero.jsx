import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

// import SocialIcon from './social-icon'

import TwitterIcon from '../icons/twitter.svg'
import InstagramIcon from '../icons/instagram.svg'
import GithubIcon from '../icons/github.svg'
import BehanceIcon from '../icons/behance.svg'

const HeroStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(3, min-content) 1fr;
    grid-column-gap: 1.2222222222222223rem;
    height: calc(100vh - 7.222222222222222rem);
    grid-auto-rows: min-content;
    position: relative;
    margin-bottom: 2.7777777777777777rem;

    h1 {
        grid-column: 1/9;
    }

    h2 {
        grid-column: 1/5;
    }

    #hero-social {
        grid-column: 1/4;
        display: flex;

        img {
            margin-right: 1.1111111111111112rem;
            stroke-color: var(--accent-color);
        }
    }

    #hero-special {
        grid-column: 1/4;
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
        }

        #hero-special-title {
            font-style: italic;
        }
    }

    #hero-arrows {
        position: absolute;
        align-self: end;
        justify-self: center;
        margin-bottom: 3.3333333333333335rem;
        display: flex;
        width: 0;
        height: 0;
        border-left: 5.5px solid transparent;
        border-right: 5.5px solid transparent;
        border-top: 11px solid var(--text-color);
        animation: pulse 1s ease-in-out alternate infinite;
    }

    @keyframes pulse {
        0% {
            padding-bottom: 10px;
        }
        100% {
            padding-bottom: 0;
        }
    }
`

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
            <div id="hero-arrows"></div>
            <Img
                fluid={data.file.childImageSharp.fluid}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    height: 'auto',
                    minWidth: '45%',
                }}
            />
        </HeroStyle>
    )
}

export default Hero
