import React from 'react'
import styled from 'styled-components'

const CloseCardStyle = styled.div`
    grid-row: 5/6;
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
                border-left: 5.5px solid transparent;
                border-right: 5.5px solid transparent;
                border-bottom: 11px solid var(--accent-color);
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

// function scrollTo(id) {
//     document.getElementById(id).scrollIntoView({
//         behavior: 'smooth',
//     })
// }

const CloseCard = ({ toggleCard, column }) => (
    <CloseCardStyle style={{ gridColumn: column }}>
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
