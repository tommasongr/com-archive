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
    border-bottom: solid 1px var(--dark-color);
    background: none;
    height: 100%;
  }

  select {
    border: none;
    border-bottom: solid 1px var(--dark-color);
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
    color: var(--dark-color);
  }

  #archive-job {
    grid-column: 7/9;
  }

  #archive-fields {
    grid-column: 9/11;
  }

  .archive-checkbox-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    border-bottom: solid 1px var(--dark-color);
    cursor: pointer;

    .archive-checkbox-input {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border: solid 1px var(--dark-color);
      height: 11px;
      width: 11px;
      background: none;

      :hover {
        border-color: var(--accent-color);
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
    {/* Select for job status */}
    <select id="archive-job">
      <option value="" disabled selected>
        Stato lavorativo
      </option>
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
    {/* Select for job field */}
    <select id="archive-fields">
      <option value="" disabled selected>
        Ambito
      </option>
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
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
