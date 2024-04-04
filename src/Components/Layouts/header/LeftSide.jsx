import React from 'react'
import Logo from '@/Components/reusable-ui/Logo'
import styled from "styled-components"


export default function LeftSide() {
  return (
    <>
      <LeftSideStyled>
        <Logo />
      </LeftSideStyled>
    </>
  )
}

const LeftSideStyled = styled.div`
  width: 30%;
  display: flex;
  justify-content: start;
`