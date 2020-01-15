import React from 'react'
import styled from 'styled-components'

const CloseCardStyle = styled.div`
    grid-row: 6/7;
    margin: 1.5555555555555556rem 0;
    margin-bottom: calc(1.5555555555555556rem * 2);

    button {
        width: 100%;

        .close-card-container {
            display: grid;
            grid-template-columns: max-content 1fr;
            width: 100%;
            align-items: center;

            .close-card-text {
                font-family: 'Suisse Intl', sans-serif;
                font-size: 0.7777777777777778rem;
                line-height: 1;
                padding: 1.5555555555555556rem 0;
                color: var(--accent-color);
            }

            .close-card-sign {
                border-left: 0.3055555555555556rem solid transparent;
                border-right: 0.3055555555555556rem solid transparent;
                border-bottom: 0.6111111111111112rem solid var(--accent-color);
            }

            .close-card-line {
                height: 0;
                width: 100%;
                border-bottom: dashed 1px var(--accent-color);
                grid-column: 1/4;
            }
        }
    }

    :hover {
        button {
            .close-card-text {
                text-decoration: line-through;
            }

            .close-card-line {
                border-bottom-style: solid;
            }
        }
    }

    :focus-within {
        button {
            .close-card-text {
                text-decoration: line-through;
            }

            .close-card-line {
                border-bottom-style: solid;
            }
        }
    }
`

const CloseCard = ({ toggleCard, className }) => (
    <CloseCardStyle className={className}>
        <button onClick={toggleCard}>
            <div className="close-card-container">
                <span className="close-card-text">Chiudi scheda</span>
                <div
                    className="close-card-sign"
                    style={{ gridColumn: '3/4' }}
                ></div>
                <div className="close-card-line"></div>
            </div>
        </button>
    </CloseCardStyle>
)

export default CloseCard
