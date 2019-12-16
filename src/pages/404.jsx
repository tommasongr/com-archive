import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Non trovata" />
        <h1>404</h1>
        <p>La pagina che stai visitando non esiste...</p>
    </Layout>
)

export default NotFoundPage
