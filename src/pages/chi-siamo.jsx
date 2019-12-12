import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ChiSiamoPageStyle = styled.div`
    display: grid;
`

const ChiSiamoPage = () => (
    <Layout>
        <ChiSiamoPageStyle>
            <SEO title="Chi siamo" />
            <h1>Chi siamo</h1>
            <h2>Hello</h2>
        </ChiSiamoPageStyle>
    </Layout>
)

export default ChiSiamoPage
