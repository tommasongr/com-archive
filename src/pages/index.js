import React from 'react'
// import { Link } from "gatsby"

import Layout from '../components/layout'
// import Image from "../components/image"
import SEO from '../components/seo'

import Hero from '../components/hero'
import Archive from '../components/archive'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Hero />
        <com-certificate></com-certificate>
        <Archive />
    </Layout>
)

export default IndexPage
