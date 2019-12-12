import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Conversations from '../components/conversations'

const ConversazioniPage = () => (
    <Layout>
        <SEO title="Conversazioni" />
        <h1>Conversazioni</h1>
        <Conversations />
    </Layout>
)

export default ConversazioniPage
