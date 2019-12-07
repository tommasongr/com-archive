import React from 'react'

import Header from './header'
import Footer from './footer'
import './normalize.css'
import './layout.css'

const Layout = ({ children }) => (
    <>
        <Header />
        <div
            style={{
                margin: `0 auto`,
                padding: `2.2222222222222223rem`,
            }}
        >
            <main>{children}</main>
            <Footer />
        </div>
    </>
)

export default Layout
