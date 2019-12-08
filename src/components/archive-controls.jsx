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

    #archive-search-container {
        grid-column: 1/4;
        height: 100%;
        max-height: 3.111111111111111rem;
    }

    #archive-search {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: 0;
        font-style: italic;
        border-bottom: solid 1px var(--text-color);
        background: none;
        height: 100%;
        width: 100%;
        color: var(--text-color);
        max-height: 3.111111111111111rem;
        padding: 0;

        :focus {
            border-bottom-color: var(--accent-color);
        }
    }

    #archive-random {
        grid-column: 4/5;
        font-family: 'Suisse Intl', serif;
        font-style: italic;
        color: var(--accent-color);
        border-bottom: solid 1px var(--accent-color);
        height: 100%;
        max-height: 3.111111111111111rem;
    }

    .archive-wrapper {
        display: flex;
        border-bottom: solid 1px var(--text-color);
        height: 100%;
        align-items: baseline;
        justify-content: space-between;
        max-height: 3.111111111111111rem;

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

    #archive-job-fields {
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
        max-height: 3.111111111111111rem;

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
        outline: none;
    }

    label:focus-within {
        outline: dashed 1px var(--accent-color);
    }

    label:active {
        outline: dashed 1px var(--accent-color);
    }
`

const ArchiveControls = ({
    archiveSearch,
    searchArchive,
    filterArchiveJob,
    filterArchiveJobFields,
    filterArchiveAbroad,
    filterArchiveAwards,
}) => (
    <ArchiveControlsStyle>
        {/* Search box */}
        <div id="archive-search-container">
            <input
                type="search"
                placeholder="Cerca nell'archivio..."
                name=""
                id="archive-search"
                value={archiveSearch}
                onChange={query => searchArchive(query)}
            />
        </div>
        <button id="archive-random">Random ??</button>
        {/* Select for job status */}
        <div className="archive-wrapper" id="archive-job">
            <select defaultValue="" onChange={value => filterArchiveJob(value)}>
                <option value="">Stato lavorativo (tutti)</option>
                <option value="Agenzia o studio">Agenzia o studio</option>
                <option value="Freelancer">Freelancer</option>
                <option value="Azienda (interno)">Azienda (interno)</option>
            </select>
            <div className="archive-arrow"></div>
        </div>
        {/* Select for job field */}
        <div className="archive-wrapper" id="archive-job-fields">
            <select
                defaultValue=""
                onChange={value => filterArchiveJobFields(value)}
            >
                <option value="">Ambito (tutti)</option>
                <option value="3D art">3D art</option>
                <option value="Advertising">Advertising</option>
                <option value="Brand design">Brand design</option>
                <option value="Digital product design">
                    Digital product design
                </option>
                <option value="Editorial design">Editorial design</option>
                <option value="Graphic design">Graphic design</option>
                <option value="Illustration">Illustration</option>
                <option value="Information design">Information design</option>
                <option value="Motion design">Motion design</option>
                <option value="Type design">Type design</option>
                <option value="UI/UX design">UI/UX design</option>
                <option value="Web design">Web design</option>
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
                onChange={filterArchiveAbroad}
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
                onChange={filterArchiveAwards}
            />
        </label>
    </ArchiveControlsStyle>
)

export default ArchiveControls
