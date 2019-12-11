import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import '../../static/badges/badge.min'

import 'prismjs/themes/prism-tomorrow.css'
import Prism from 'prismjs'

const BadgesPageStyle = styled.div`
    #badges-page-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        background-color: #d4d4d4;

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
        margin-top: 50px;
        border-radius: 0;
    }
`

class BadgesPage extends React.Component {
    componentDidMount() {
        Prism.highlightAll()
    }

    render() {
        let badgeCode = `<com-badge color="red" bg="false">
<script async src="https://archiviocom.netlify.com/badges/badge.min.js" charset="utf-8"></script>`

        return (
            <Layout>
                <BadgesPageStyle>
                    <h1>Certificati di appartenenza</h1>
                    <h2>
                        Il tuo certificato di appartenenza all'Archivio Com.
                    </h2>
                    <div id="badges-page-container">
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
                    <pre>
                        <code className="language-html">{badgeCode}</code>
                    </pre>
                </BadgesPageStyle>
            </Layout>
        )
    }
}

export default BadgesPage
