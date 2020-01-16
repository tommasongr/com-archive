import React from 'react'
import { Link, navigate } from 'gatsby'
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

        @media screen and (max-width: 620px) {
            /* display: none; */
        }
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

    .header-mobile-menu-wrapper {
        display: none;
        /* border-bottom: solid 1px var(--accent-color); */
        height: 100%;
        align-items: baseline;
        justify-content: space-between;
        cursor: pointer;
        position: relative;

        select {
            border: none;
            border-radius: 0;
            background: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            text-indent: 0;
            text-overflow: '';
            cursor: pointer;
            padding: 0;
            height: 100%;
            font-weight: 400;
            font-family: 'Suisse Intl', serif;
            font-size: 1.1111111111111112rem;
            line-height: 1.7777777777777777rem;
            color: var(--accent-color);
            position: relative;
            padding-right: 1.3888888888888888rem;
            text-align: right;
            direction: rtl;

            option {
                padding: 0;
                color: var(--accent-color);
                direction: rtl;
            }

            :focus {
                outline: none;
            }

            :-moz-focusring {
                color: transparent;
                text-shadow: 0 0 0 var(--accent-color);
            }
        }

        :focus-within {
            outline: dashed 1px var(--accent-color);
        }

        ::after {
            content: '';
            pointer-events: none;
            position: absolute;
            width: 0;
            height: 0;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            border-left: 0.3055555555555556rem solid transparent;
            border-right: 0.3055555555555556rem solid transparent;
            border-top: 0.6111111111111112rem solid var(--accent-color);
        }
    }

    @media screen and (max-width: 620px) {
        margin-top: 1.1111111111111112rem;
    }

    @media screen and (max-width: 470px) {
        /* margin-top: 0.8333333333333334rem; */

        .header-mobile-menu-wrapper {
            display: flex;
        }

        .header-item {
            display: none;
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
            <div className="header-mobile-menu-wrapper">
                <select
                    id="header-mobile-menu"
                    onChange={value => navigate(value.target.value)}
                >
                    <option selected disabled>
                        Menu
                    </option>
                    <option disabled>─ ─ ─ ─ ─ ─ ─</option>
                    <option value="/">Archivio</option>
                    <option value="/conversazioni">Conversazioni</option>
                    <option value="/chi-siamo">Chi siamo</option>
                </select>
            </div>
        </section>
    </HeaderStyle>
)

export default Header
