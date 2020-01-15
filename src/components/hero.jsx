import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import styled from 'styled-components'

import HeroImage1 from '../../static/assets/bitmap-beatrice-dagostino.png'
import HeroImage2 from '../../static/assets/bitmap-paolo-insinga.png'
import HeroImage3 from '../../static/assets/designer-alessandro-sposato.png'

import IconInstagram from '../components/social-icons/icon-instagram'
import IconGithub from '../components/social-icons/icon-github'
import IconRss from '../components/social-icons/icon-rss'
import IconTelegram from '../components/social-icons/icon-telegram'

const HeroStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: min-content 1fr;
    grid-column-gap: 1.2222222222222223rem;
    height: calc(100vh - 7.222222222222222rem);
    position: relative;
    margin-bottom: 1.1111111111111112rem;

    #hero-text-container {
        position: absolute;
        z-index: 111;

        #hero-title-mobile {
            display: none;
        }

        #hero-subtitle-mobile {
            display: none;
        }
    }

    #hero-social {
        display: flex;

        a {
            margin-right: 0.8333333333333334rem;

            :last-of-type {
                margin-right: 0;
            }
        }

        svg {
            width: 1.9444444444444444rem;
            height: auto;
        }
    }

    #hero-special {
        grid-column: 1/4;
        grid-row: 2/3;
        align-self: end;
        margin-bottom: 3.3333333333333335rem;
        z-index: 111;

        span:first-of-type {
            font-size: 0.8888888888888888rem;
            line-height: 1.5555555555555556rem;
        }

        a {
            color: var(--accent-color);
        }

        #hero-special-designer,
        #hero-special-title {
            font-size: 1.1111111111111112rem;
            line-height: 1.7777777777777777rem;
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
        z-index: 111;

        #hero-arrows {
            width: 0;
            height: 0;
            border-left: 0.3055555555555556rem solid transparent;
            border-right: 0.3055555555555556rem solid transparent;
            border-top: 0.6111111111111112rem solid var(--text-color);
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

    @media screen and (max-width: 620px) {
        height: calc(100vh - 7.222222222222222rem + 1.1111111111111112rem);

        #hero-text-container {
            position: relative;
            grid-column: 1/13;

            h1 {
                display: none;
            }
            #hero-title-mobile {
                display: block;
            }
            h2 {
                display: none;
            }
            #hero-subtitle-mobile {
                display: block;

                br {
                    display: none;
                }
            }
        }
        #hero-special {
            display: none;
        }

        #hero-arrows-container {
            display: none;
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
        query LastConversation {
            allMarkdownRemark(
                filter: {
                    fileAbsolutePath: { regex: "/extras/" }
                    frontmatter: { content_type: { eq: "Conversazione" } }
                }
                limit: 1
                sort: { order: DESC, fields: frontmatter___date }
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            name
                            designer
                        }
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
                <h1 id="hero-title-mobile">
                    Benvenuti nell'archivio dei comunicatori.
                </h1>
                <h2>
                    Designer, progetti, conversazioni <br /> e altri contenuti
                    speciali raccolti <br />
                    in un unico luogo.
                </h2>
                <h2 id="hero-subtitle-mobile">
                    Laureati in Design della Comunicazione al Politecnico di
                    Milano, che fanno la differenza.
                </h2>
                <div id="hero-social">
                    <IconInstagram socialLink="https://www.instagram.com/com.archivioo/" />
                    <IconTelegram socialLink="https://t.me/comarchivio" />
                    <IconGithub socialLink="https://github.com/tommasongr/com-archive" />
                    <IconRss socialLink="https://archiviocom.netlify.com/rss.xml" />
                </div>
            </div>
            <div id="hero-special">
                <span>
                    In conversazione con <br />
                </span>
                <Link
                    to={data.allMarkdownRemark.edges[0].node.fields.slug}
                    id="hero-special-button"
                >
                    <span id="hero-special-designer">
                        {
                            data.allMarkdownRemark.edges[0].node.frontmatter
                                .designer[0]
                        }
                        <br />
                    </span>
                    <span id="hero-special-title">
                        {data.allMarkdownRemark.edges[0].node.frontmatter.name}
                        <br />
                    </span>
                </Link>
            </div>
            <div id="hero-arrows-container" onClick={scrollToArchive}>
                <div id="hero-arrows"></div>
            </div>
            <HeroImagesContainer />
        </HeroStyle>
    )
}

const HeroImagesContainerStyle = styled.div`
    position: relative;
    grid-column: 4/13;
    grid-row: 1/3;
    justify-content: flex-end;
    align-items: flex-end;
    display: flex;
    height: 100%;
    z-index: 000;

    .hero-image {
        max-height: 100%;
        max-width: 100%;

        position: absolute;
        display: none;
        opacity: 0;
    }

    @keyframes heroFade {
        0% {
            opacity: 0;
        }

        8% {
            opacity: 1;
        }

        92% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }

    .hero-image-animation {
        display: block;
        opacity: 0;
        animation: heroFade 6s ease-in-out 1 forwards;
    }

    @media screen and (max-width: 1350px) {
        grid-column: 8/13;
    }

    @media screen and (max-width: 1024px) {
        grid-column: 7/13;
    }

    @media screen and (max-width: 900px) {
        grid-column: 6/13;
    }

    @media screen and (max-width: 620px) {
        grid-column: 1/13;
        grid-row: 2/3;
    }
`

class HeroImagesContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let images = document.querySelectorAll('.hero-image')
        let secs = 6

        function backgroundSequence() {
            window.clearTimeout()
            var k = 0
            for (let index = 0; index < images.length; index++) {
                setTimeout(function() {
                    images[index].classList.add('hero-image-animation')

                    setTimeout(() => {
                        images[index].classList.remove('hero-image-animation')
                    }, secs * 1000)

                    // Repeat the cycle
                    if (k + 1 === images.length) {
                        setTimeout(function() {
                            backgroundSequence()
                        }, secs * 1000)
                    } else {
                        k++
                    }
                }, secs * 1000 * index)
            }
        }
        backgroundSequence()
    }

    render() {
        return (
            <HeroImagesContainerStyle>
                <img src={HeroImage1} className="hero-image" alt="" srcset="" />
                <img src={HeroImage2} className="hero-image" alt="" srcset="" />
                {/* <img src={HeroImage3} className="hero-image" alt="" srcset="" /> */}
            </HeroImagesContainerStyle>
        )
    }
}

export default Hero
