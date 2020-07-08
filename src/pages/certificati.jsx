import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import '../../static/badges/badge.min'

import 'prismjs/themes/prism-tomorrow.css'
import Prism from 'prismjs'

import image1 from '../images/badges01.png'
import image2 from '../images/badges02.png'

const CertificatiPageStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 1.2222222222222223rem;

    h1 {
        grid-column: 1/13;
    }

    h2 {
        grid-column: 1/13;
    }

    h3 {
        grid-column: 1/13;
        font-size: 1.1111111111111112rem;
        line-height: 1.7777777777777777rem;
        margin-bottom: 1.1111111111111112rem;
        margin-top: 1.3888888888888888rem;
    }

    p {
        grid-column: 1/6;
        margin-top: 30px;

        :first-of-type {
            margin: 0;
        }
    }

    #certificati-page-container {
        grid-column: 1/13;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        background-color: #d4d4d4;
        margin-bottom: 30px;

        com-badge {
            height: 200px;
            width: 200px;
            padding: 50px 0;
        }

        span {
            margin-bottom: 50px;
            font-family: Suisse Intl, sans-serif;
            font-weight: 600;
            font-style: italic;
            color: var(--accent-color);
        }
    }

    pre {
        grid-column: 1/13;
        margin-top: 50px;
        border-radius: 0;
        font-family: Suisse Intl, sans-serif;

        span {
            font-family: Suisse Intl, sans-serif;
        }
    }

    .certificati-page-divider {
        grid-column: 1/13;
        border-bottom: solid 1px var(--accent-color);
        width: 100%;
        margin: 30px 0;
    }

    .certificati-page-images {
        grid-column: 1/13;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1.2222222222222223rem;

        img {
            width: 100%;
        }
    }
`

class CertificatiPage extends React.Component {
    componentDidMount() {
        Prism.highlightAll()
    }

    render() {
        let badgeCode = `<com-badge color="red" bg="false">
<script async src="https://archiviocom.netlify.app/badges/badge.js" charset="utf-8"></script>`

        return (
            <Layout>
                <SEO title="Certificati" />
                <CertificatiPageStyle>
                    <h1>Certificati</h1>
                    <h2>
                        Una serie di badge con stili
                        <br /> differenti per mostrare a tutti <br />
                        la propria appartenza all'archivio.
                    </h2>
                    <div id="certificati-page-container">
                        <com-badge color="red" bg="false" />
                        <com-badge color="black" bg="false" />
                        <com-badge color="white" bg="false" />
                        <span>color="red" bg="false"</span>
                        <span>color="black" bg="false"</span>
                        <span>color="white" bg="false"</span>
                        <com-badge color="red" bg="true" />
                        <com-badge color="black" bg="true" />
                        <com-badge color="white" bg="true" />
                        <span>color="red" bg="true"</span>
                        <span>color="black" bg="true"</span>
                        <span>color="white" bg="true"</span>
                    </div>
                    <h3>Introduzione</h3>
                    <p>
                        I designer presenti nell'archivio possono inserire sul
                        loro sito personale il badge di riconoscimento
                        ufficiale. Per aggiungere il badge basta copiare le due
                        righe di codice sottostante, incollarle nell'
                        <em>html</em> del proprio sito e posizionare il{' '}
                        <em>badge</em> dove più si preferisce.
                    </p>
                    <p>
                        Come si può notare dalla dicitura{' '}
                        <strong>
                            <em>com-badge</em>
                        </strong>{' '}
                        quello che abbiamo creato è un componente{' '}
                        <em>html custom</em>. Questo ci permette non solo di
                        controllare che il badge venga inserito solo previa
                        autorizzazione, ma anche di lavorare su due piani
                        totalmente diversi rispetto al codice del sito ospite e
                        quindi di non creare interferenze di alcun tipo con lo
                        stile definito dal designer.
                    </p>
                    <p>
                        Sappiamo quanto il <em>look and feel</em> di ciò che li
                        rappresenta sia fondamentale per i designer, per questo
                        vogliamo dare sempre il massimo per rispettare le loro
                        necessità.
                    </p>
                    <pre>
                        <code className="language-html">{badgeCode}</code>
                    </pre>
                    <div className="certificati-page-divider"></div>
                    <h3>Esempi di applicazione</h3>
                    <div className="certificati-page-images">
                        <img src={image1} alt="" />
                        <img src={image2} alt="" />
                    </div>
                </CertificatiPageStyle>
            </Layout>
        )
    }
}

export default CertificatiPage
