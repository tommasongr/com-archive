import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const HeaderStyle = styled.header`
    margin-top: 2.2222222222222223rem;
    padding: 0 2.2222222222222223rem;

    @media screen and (max-width: 620px) {
        padding: 0 1.1111111111111112rem;
    }

    .header {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
    }

    .header-logo {
        color: inherit;
        color: var(--accent-color);
        text-decoration: none;
        margin: 0;
        font-weight: 700;
        font-style: italic;
        font-size: 2.111111111111111rem;
        line-height: 2.7777777777777777rem;
    }

    .header-items {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
        align-items: baseline;
    }

    .header-item {
        margin: 0;
        padding: 0;
        margin-right: 1.9444444444444444rem;

        :last-of-type {
            margin: 0;
        }

        a {
            color: inherit;
            color: var(--accent-color);
            text-decoration: none;
            font-family: 'Suisse Intl', sans-serif;
            font-size: 1.1111111111111112rem;
            line-height: 1.7777777777777777rem;

            :hover {
                text-decoration: line-through;
                text-decoration-thickness: 0.1rem;
            }
        }
    }
`

const Header = () => (
    <HeaderStyle>
        <section className="header">
            <Link to="/" className="header-logo">
                com.
            </Link>
            <ul className="header-items">
                <li className="header-item">
                    <Link to="/">Archivio</Link>
                </li>
                <li className="header-item">
                    <Link to="/conversazioni">Conversazioni</Link>
                </li>
                <li className="header-item">
                    <Link to="/chi-siamo">Chi siamo</Link>
                </li>
            </ul>
        </section>
    </HeaderStyle>
)

export default Header
