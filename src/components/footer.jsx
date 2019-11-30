import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const FooterStyle = styled.footer`
    margin: 0;
    margin-top: 8.333333333333334rem;

    #footer {
        display: grid;
        grid-template-columns: repeat(12, 1fr);

        #footer-cc {
            grid-column: 1/4;
        }

        #footer-cc-icons {
            display: flex;

            svg {
                height: 1.9444444444444444rem;
                margin-right: 1.3888888888888888rem;

                :last-of-type {
                    margin: 0;
                }
            }
        }

        #footer-cc-text {
            font-family: 'Suisse Intl', sans-serif;
            font-size: 0.6666666666666666rem;
            line-height: 1.1111111111111112rem;
            margin: 0;
            margin-top: 1.1111111111111112rem;
        }

        #footer-logo {
            grid-column: 11/13;
            justify-self: right;
            color: inherit;
            color: var(--accent-color);
            text-decoration: none;
            margin: 0;
            font-weight: 700;
            font-style: italic;
            font-size: 2.111111111111111rem;
            line-height: 2.7777777777777777rem;
            text-align: end;

            span {
                color: var(--text-color);
            }
        }
    }
`

const Footer = () => (
    <FooterStyle>
        <section id="footer">
            <div id="footer-cc">
                <div id="footer-cc-icons">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="creative-commons"
                        class="svg-inline--fa fa-creative-commons fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                    >
                        <path
                            fill="var(--text-color)"
                            d="M245.83 214.87l-33.22 17.28c-9.43-19.58-25.24-19.93-27.46-19.93-22.13 0-33.22 14.61-33.22 43.84 0 23.57 9.21 43.84 33.22 43.84 14.47 0 24.65-7.09 30.57-21.26l30.55 15.5c-6.17 11.51-25.69 38.98-65.1 38.98-22.6 0-73.96-10.32-73.96-77.05 0-58.69 43-77.06 72.63-77.06 30.72-.01 52.7 11.95 65.99 35.86zm143.05 0l-32.78 17.28c-9.5-19.77-25.72-19.93-27.9-19.93-22.14 0-33.22 14.61-33.22 43.84 0 23.55 9.23 43.84 33.22 43.84 14.45 0 24.65-7.09 30.54-21.26l31 15.5c-2.1 3.75-21.39 38.98-65.09 38.98-22.69 0-73.96-9.87-73.96-77.05 0-58.67 42.97-77.06 72.63-77.06 30.71-.01 52.58 11.95 65.56 35.86zM247.56 8.05C104.74 8.05 0 123.11 0 256.05c0 138.49 113.6 248 247.56 248 129.93 0 248.44-100.87 248.44-248 0-137.87-106.62-248-248.44-248zm.87 450.81c-112.54 0-203.7-93.04-203.7-202.81 0-105.42 85.43-203.27 203.72-203.27 112.53 0 202.82 89.46 202.82 203.26-.01 121.69-99.68 202.82-202.84 202.82z"
                        ></path>
                    </svg>
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="creative-commons-by"
                        class="svg-inline--fa fa-creative-commons-by fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                    >
                        <path
                            fill="var(--text-color)"
                            d="M314.9 194.4v101.4h-28.3v120.5h-77.1V295.9h-28.3V194.4c0-4.4 1.6-8.2 4.6-11.3 3.1-3.1 6.9-4.7 11.3-4.7H299c4.1 0 7.8 1.6 11.1 4.7 3.1 3.2 4.8 6.9 4.8 11.3zm-101.5-63.7c0-23.3 11.5-35 34.5-35s34.5 11.7 34.5 35c0 23-11.5 34.5-34.5 34.5s-34.5-11.5-34.5-34.5zM247.6 8C389.4 8 496 118.1 496 256c0 147.1-118.5 248-248.4 248C113.6 504 0 394.5 0 256 0 123.1 104.7 8 247.6 8zm.8 44.7C130.2 52.7 44.7 150.6 44.7 256c0 109.8 91.2 202.8 203.7 202.8 103.2 0 202.8-81.1 202.8-202.8.1-113.8-90.2-203.3-202.8-203.3z"
                        ></path>
                    </svg>
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="creative-commons-nc-eu"
                        class="svg-inline--fa fa-creative-commons-nc-eu fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                    >
                        <path
                            fill="var(--text-color)"
                            d="M247.7 8C103.6 8 0 124.8 0 256c0 136.3 111.7 248 247.7 248C377.9 504 496 403.1 496 256 496 117 388.4 8 247.7 8zm.6 450.7c-112 0-203.6-92.5-203.6-202.7 0-23.2 3.7-45.2 10.9-66l65.7 29.1h-4.7v29.5h23.3c0 6.2-.4 3.2-.4 19.5h-22.8v29.5h27c11.4 67 67.2 101.3 124.6 101.3 26.6 0 50.6-7.9 64.8-15.8l-10-46.1c-8.7 4.6-28.2 10.8-47.3 10.8-28.2 0-58.1-10.9-67.3-50.2h90.3l128.3 56.8c-1.5 2.1-56.2 104.3-178.8 104.3zm-16.7-190.6l-.5-.4.9.4h-.4zm77.2-19.5h3.7v-29.5h-70.3l-28.6-12.6c2.5-5.5 5.4-10.5 8.8-14.3 12.9-15.8 31.1-22.4 51.1-22.4 18.3 0 35.3 5.4 46.1 10l11.6-47.3c-15-6.6-37-12.4-62.3-12.4-39 0-72.2 15.8-95.9 42.3-5.3 6.1-9.8 12.9-13.9 20.1l-81.6-36.1c64.6-96.8 157.7-93.6 170.7-93.6 113 0 203 90.2 203 203.4 0 18.7-2.1 36.3-6.3 52.9l-136.1-60.5z"
                        ></path>
                    </svg>
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="creative-commons-nd"
                        class="svg-inline--fa fa-creative-commons-nd fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                    >
                        <path
                            fill="var(--text-color)"
                            d="M247.6 8C389.4 8 496 118.1 496 256c0 147.1-118.5 248-248.4 248C113.6 504 0 394.5 0 256 0 123.1 104.7 8 247.6 8zm.8 44.7C130.2 52.7 44.7 150.6 44.7 256c0 109.8 91.2 202.8 203.7 202.8 103.2 0 202.8-81.1 202.8-202.8.1-113.8-90.2-203.3-202.8-203.3zm94 144.3v42.5H162.1V197h180.3zm0 79.8v42.5H162.1v-42.5h180.3z"
                        ></path>
                    </svg>
                </div>
                <p id="footer-cc-text">
                    Eccetto dove altrimenti segnalato, il contenuto di questo
                    sito è sotto licenza{' '}
                    <a
                        href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
                        target="blank"
                    >
                        Creative Commons Attribuzione - Non commerciale - Non
                        opere derivate 4.0 International license
                    </a>
                    . <br />
                    Icone di{' '}
                    <a href="https://fontawesome.com/" target="blank">
                        Font Awesome
                    </a>
                    .
                </p>
            </div>
            <Link to="/" id="footer-logo">
                <span>archivio</span> com.
            </Link>
        </section>
    </FooterStyle>
)

export default Footer
