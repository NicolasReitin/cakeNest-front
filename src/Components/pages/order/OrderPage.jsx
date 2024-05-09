import React from 'react'
import { useParams } from 'react-router-dom';
import styled from "styled-components"
import Navbar from '@/Components/Layouts/header/Navbar';
import {theme} from '../../../index';
import Cards from '../../reusable-ui/Cards.jsx';

export default function OrderPage() {

  const {username} = useParams();
  return (
    <>
      <WrapperStyled>
        <ContainerStyled>
          <Navbar username={username}/>

          <MainStyled>
            <Cards />
          </MainStyled>

        </ContainerStyled>
      </WrapperStyled>
    </>
  )
}

const WrapperStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  padding: 3%;
`
const ContainerStyled = styled.div`
  height: 90%;
`
const MainStyled = styled.main`
  overflow: hidden;
  padding: 2%;
  border-radius: 0 0 10px 10px;
  background-color: ${theme.colors.background_white};
  height: 100%;
  box-shadow: 
    inset 0 10px 15px 0px rgba(0, 0, 0, 0.2), /* Shadow top */
    inset -10px 0 15px 0px rgba(0, 0, 0, 0.2), /* Shadow left */
    inset 10px 0 15px 0px rgba(0, 0, 0, 0.2); /* Shadow right */
`
