import React from 'react'
import Profile from '@/Components/reusable-ui/Profile'
import styled from 'styled-components'

export default function RightSide({username}) {
  return (
    <>
        <RightSideStyled>
            <Profile username={username}/>
        </RightSideStyled>
            
    </>
  )
}

const RightSideStyled = styled.div`
  width: 30%;
  display: flex;
  justify-content: end;
  
`