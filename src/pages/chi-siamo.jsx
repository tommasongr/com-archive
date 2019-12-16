import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import IconInstagram from '../components/social-icons/icon-instagram'
import IconGithub from '../components/social-icons/icon-github'
import IconRss from '../components/social-icons/icon-rss'
import IconTelegram from '../components/social-icons/icon-telegram'

const ChiSiamoPageStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 1.2222222222222223rem;

    h1 {
        grid-column: 1/6;
    }

    h2 {
        grid-column: 1/6;
        grid-row: 2/3;
    }

    p {
        grid-column: 1/6;
        margin-top: 30px;

        :first-of-type {
            margin: 0;
        }
    }

    .chi-siamo-page-contacts {
        grid-column: 6/13;
        justify-self: end;
        grid-row: 3/4;
        align-self: start;

        span {
            font-family: Suisse Intl, sans-serif;
            color: var(--accent-color);
        }

        .chi-siamo-page-contacts-social {
            display: flex;
            justify-content: end;
            margin-bottom: 20px;

            a {
                margin-right: 0.8333333333333334rem;
                margin-top: 0;

                :last-of-type {
                    margin-right: 0;
                }
            }

            svg {
                width: 1.9444444444444444rem;
                height: auto;
            }
        }
    }
`

const ChiSiamoPage = () => (
    <Layout>
        <ChiSiamoPageStyle>
            <SEO title="Chi siamo" />
            <h1>Chi siamo</h1>
            <h2>
                Qualche informazione sull'archivio
                <br /> e su come contattarci.
            </h2>
            <p>
                <em>Com.</em> è stato realizzato raccogliendo le eccellenze dei
                progettisti laureati in Design della Comunicazione al
                Politecnico di Milano. Potrete osservare i differenti percorsi
                intrapresi da figure uniche che sottolineano le diverse
                opportunità e potenzialità che questa professione ha da offrire.
            </p>
            <p>
                L’intento è portare la comunità di design della comunicazione
                verso una maggiore consapevolezza collettiva a beneficio dei
                designer stessi.
            </p>
            <div className="chi-siamo-page-contacts">
                <div className="chi-siamo-page-contacts-social">
                    <IconInstagram socialLink="https://www.instagram.com/com.archivioo/" />
                    <IconTelegram socialLink="https://t.me/comarchivio" />
                    <IconGithub socialLink="https://github.com/tommasongr/com-archive" />
                    <IconRss socialLink="https://archiviocom.netlify.com/rss.xml" />
                </div>
                <span>
                    <a href="mailto:">com.archivio@gmail.com</a>
                </span>
            </div>
        </ChiSiamoPageStyle>
    </Layout>
)

export default ChiSiamoPage
