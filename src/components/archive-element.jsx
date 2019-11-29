import React from 'react'
import styled from 'styled-components'

const ArchiveElementStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1.2222222222222223rem;
  border-top: solid var(--dark-color) 1px;
  height: 3.111111111111111rem;
  align-items: center;
  cursor: pointer;

  :hover {
    color: var(--accent-color);
  }

  span {
    font-size: 1.1111111111111112rem;
    line-height: 1.7777777777777777rem;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .archive-element-year {
    grid-column: 1/2;
  }

  .archive-element-name {
    grid-column: 2/7;
    font-weight: 600;
  }

  .archive-element-job {
    grid-column: 7/11;
  }

  .archive-element-based {
    grid-column: 11/13;
  }
`

const ArchiveElement = () => (
  <ArchiveElementStyle>
    <span className="archive-element-year">2019</span>
    <span className="archive-element-name">Benedetta Signaroldi</span>
    <span className="archive-element-job">The Visual Agency</span>
    <span className="archive-element-based">Milano</span>
  </ArchiveElementStyle>
)

export default ArchiveElement
