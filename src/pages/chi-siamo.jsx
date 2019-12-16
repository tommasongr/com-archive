import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ChiSiamoPageStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 1.2222222222222223rem;

    h1 {
        grid-column: 1/13;
    }

    h2 {
        grid-column: 1/13;
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
                Com. è un archivio che è stato realizzato raccogliendo le
                eccellenze dei progettisti laureati in Design della
                Comunicazione al Politecnico di Milano. Puoi osservare i
                differenti percorsi intrapresi da figure uniche che sottolineano
                le diverse opportunità e potenzialità che questa professione ha
                da offrire.
            </p>
            <p>
                L’intento è portare la comunità di design della comunicazione
                verso una maggiore consapevolezza collettiva a beneficio dei
                designer stessi.
            </p>
            <div className="chi-siamo-page-contacts">
                <span>archiviocom@gmail.com</span>
            </div>
        </ChiSiamoPageStyle>
    </Layout>
)

export default ChiSiamoPage
