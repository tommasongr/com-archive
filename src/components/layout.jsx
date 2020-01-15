import React from 'react'
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'
import './normalize.css'
import './layout.css'

import smoothscroll from 'smoothscroll-polyfill'
if (typeof window !== `undefined`) {
    smoothscroll.polyfill()
}

const LayoutStyled = styled.div`
    margin: 0 auto;
    padding: 2.2222222222222223rem;

    @media screen and (max-width: 620px) {
        padding: 1.1111111111111112rem;
    }
`

const Layout = ({ children }) => (
    <>
        <Header />
        <LayoutStyled>
            <main>{children}</main>
            <Footer />
        </LayoutStyled>
    </>
)

export default Layout
