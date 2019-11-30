import React from 'react'
import styled from 'styled-components'

const ArchiveControlsStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1.2222222222222223rem;
    height: 3.111111111111111rem;
    align-items: center;
    margin-bottom: 2.6666666666666665rem;
    font-weight: 400;
    font-style: italic;

    #archive-search {
        grid-column: 1/4;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: 0;
        font-style: italic;
        border-bottom: solid 1px var(--text-color);
        background: none;
        height: 100%;
        color: var(--text-color);
    }

    #archive-random {
        grid-column: 4/5;
        font-family: 'Suisse Intl', serif;
        font-style: italic;
        color: var(--accent-color);
        border-bottom: solid 1px var(--accent-color);
        height: 100%;
    }

    .archive-wrapper {
        display: flex;
        border-bottom: solid 1px var(--text-color);
        height: 100%;
        align-items: baseline;
        justify-content: space-between;

        select {
            border: none;
            border-radius: 0;
            background: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            text-indent: 0;
            text-overflow: '';
            padding: 0;
            height: 100%;
            font-weight: 400;
            font-style: italic;
            color: var(--text-color);
            cursor: pointer;
            position: relative;
            width: 100%;

            option {
                padding: 0;
            }

            :focus {
                outline: none;
            }

            :-moz-focusring {
                color: transparent;
                text-shadow: 0 0 0 var(--text-color);
            }
        }

        .archive-arrow {
            width: 0;
            height: 0;
            border-left: 5.5px solid transparent;
            border-right: 5.5px solid transparent;
            border-top: 11px solid var(--text-color);
        }

        :focus-within {
            outline: dashed 1px var(--accent-color);
        }
    }

    #archive-fields {
        grid-column: 9/11;
    }

    #archive-job {
        grid-column: 7/9;
    }

    .archive-checkbox-label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        border-bottom: solid 1px var(--text-color);
        cursor: pointer;

        .archive-checkbox-input {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            border: solid 1px var(--text-color);
            height: 11px;
            width: 11px;
            background: none;

            :focus {
                outline: none;
            }

            :checked {
                border-color: var(--accent-color);
                background-color: var(--accent-color);
            }
        }
    }

    #archive-abroad-container {
        grid-column: 11/12;
    }

    #archive-awards-container {
        grid-column: 12/13;
    }

    //   States

    input[type='search']:focus {
        outline: dashed 1px var(--accent-color);
    }

    label:focus-within {
        outline: dashed 1px var(--accent-color);
    }

    label:active {
        outline: dashed 1px var(--accent-color);
    }
`

const ArchiveControls = () => (
    <ArchiveControlsStyle>
        {/* Search box */}
        <input
            type="search"
            placeholder="Cerca nell'archivio..."
            name=""
            id="archive-search"
        />
        <button id="archive-random">Random ??</button>
        {/* Select for job status */}
        <div className="archive-wrapper" id="archive-job">
            <select>
                <option value="" disabled selected>
                    Stato lavorativo
                </option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
            <div className="archive-arrow"></div>
        </div>
        {/* Select for job field */}
        <div className="archive-wrapper" id="archive-fields">
            <select>
                <option value="" disabled selected>
                    Ambito
                </option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
            <div className="archive-arrow"></div>
        </div>
        {/* Checkbox for abroad */}
        <label
            htmlFor="archive-abroad"
            className="archive-checkbox-label"
            id="archive-abroad-container"
        >
            Estero
            <input
                type="checkbox"
                name="Estero"
                className="archive-checkbox-input"
                id="archive-abroad"
            />
        </label>
        {/* Checkbox for awards */}
        <label
            htmlFor="archive-awards"
            className="archive-checkbox-label"
            id="archive-awards-container"
        >
            Premi
            <input
                type="checkbox"
                name="Premi"
                className="archive-checkbox-input"
                id="archive-awards"
            />
        </label>
    </ArchiveControlsStyle>
)

export default ArchiveControls
