import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Hero from '../components/hero'
import Archive from '../components/archive'
import ArchiveCounter from '../components/archive-counter'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Hero />
        <Archive />
        <ArchiveCounter />
    </Layout>
)

export default IndexPage
