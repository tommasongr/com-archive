import React from 'react'
import styled from 'styled-components'

import ArchiveElement from '../components/archive-element'

const ArchiveStyled = styled.div`
  display: grid;
  grid-auto-rows: auto;
`

const GridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 15px;

  div {
    background-color: pink;
    width: 100%;
    height: 20px;
  }
`

const Archive = () => (
  <ArchiveStyled>
    <GridStyle>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </GridStyle>
    <ArchiveElement />
    <ArchiveElement />
    <ArchiveElement />
  </ArchiveStyled>
)

export default Archive
