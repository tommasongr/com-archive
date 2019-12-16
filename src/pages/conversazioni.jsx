import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Conversations from '../components/conversations'
import IconRss from '../components/social-icons/icon-rss'
import IconTelegram from '../components/social-icons/icon-telegram'

const ConversazioniPageStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 1.2222222222222223rem;

    h1 {
        grid-column: 1/8;
    }

    h2 {
        grid-column: 1/8;
    }

    .conversazioni-page-feed {
        grid-column: 8/13;
        grid-row: 1/3;
        justify-self: end;
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

    .conversazioni-page-divider {
        grid-column: 1/13;
        width: 100%;
        margin-top: 4.444444444444445rem;
        border-bottom: solid 1px var(--accent-color);
    }
`

const ConversazioniPage = () => (
    <Layout>
        <SEO
            title="Conversazioni"
            description="Le domande giuste alle persone giuste, ovvero, le conversazioni di com. Interviste inedite a cura della redazione <br /> per approndire gli svariati rami del design della comunicazione."
        />
        <ConversazioniPageStyle>
            <h1>
                Le domande giuste alle persone giuste, <br />
                ovvero, le conversazioni di <em>com.</em>
            </h1>
            <h2>
                Interviste inedite a cura della redazione <br /> per approndire
                gli svariati rami <br />
                del design della comunicazione.
            </h2>
            <div className="conversazioni-page-feed">
                <IconRss socialLink="https://archiviocom.netlify.com/rss.xml" />
                <IconTelegram socialLink="https://t.me/comarchivio" />
            </div>
            <div className="conversazioni-page-divider"></div>
            <Conversations />
        </ConversazioniPageStyle>
    </Layout>
)

export default ConversazioniPage
