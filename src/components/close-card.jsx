import React from 'react'
import styled from 'styled-components'

const CloseCardStyle = styled.div`
    grid-row: 5/6;
    margin: 1.5555555555555556rem 0;
    margin-bottom: calc(1.5555555555555556rem * 2);

    button {
        width: 100%;

        .container {
            display: grid;
            grid-template-columns: max-content 1fr;
            width: 100%;
            align-items: center;

            span {
                font-family: 'Suisse Intl', sans-serif;
                font-size: 0.7777777777777778rem;
                text-decoration: underline;
                line-height: 1;
                padding: 1.5555555555555556rem 0;
                margin-right: 1.1111111111111112rem;
                color: var(--accent-color);
            }

            div {
                height: 0;
                width: 100%;
                border: dashed 1px var(--accent-color);
            }
        }
    }

    // :hover {
    //     button {
    //         span {
    //             color: var(--accent-color);
    //         }

    //         div {
    //             border-color: var(--accent-color);
    //         }
    //     }
    // }

    // :focus-within {
    //     button {
    //         span {
    //             color: var(--accent-color);
    //         }

    //         div {
    //             border-color: var(--accent-color);
    //         }
    //     }
    // }
`

const CloseCard = ({ toggleCard, column }) => (
    <CloseCardStyle style={{ gridColumn: column }}>
        <button onClick={toggleCard}>
            <div className="container">
                <span>Chiudi scheda</span>
                <div></div>
            </div>
        </button>
    </CloseCardStyle>
)

export default CloseCard
