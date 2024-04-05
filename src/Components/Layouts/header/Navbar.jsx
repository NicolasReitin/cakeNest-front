import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import styled from "styled-components"
import {theme} from "../../../index.js"
import AdminButton from '@/Components/Layouts/header/AdminButton.jsx'


export default function Navbar({username}) {
  
  return (
    <>
      <NavbarStyled>
          <LeftSide />

          <div className='admin-button'>
            <AdminButton />
          </div>

          <RightSide username={username}/>
      </NavbarStyled>

        
    </>
  )
}

const NavbarStyled = styled.div`
  width: 100%;
  background-color: ${theme.colors.white};
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 1%;
  height: 7vh;
  min-height: 90px;
  .admin-button{
    position: relative;
    display: flex;
    align-items: center;
  }
`
