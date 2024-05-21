import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from "styled-components"
import Navbar from '@/Components/Layouts/header/Navbar';
import {theme} from '../../../index';
import Cards from '../../reusable-ui/Cards.jsx';
import axios from '@/lib/axios'


export default function OrderPage() {

  const {username} = useParams();

  //via axios
  const [articles, setArticles] = useState([]); // État pour stocker les articles

  useEffect(() =>{
    // Fonction asynchrone pour récupérer les articles
    const fetchArticles = async() => {
      try {
        const response = await axios.get('/api/cupcakes')
        setArticles(response.data.data)
        console.log(articles);
      } catch (err) {

      }
    }

    fetchArticles();
  }, []);

  const handleNewCupcake = (cupcake) => {
    setArticles([...articles, cupcake])
  }
 
 
  return (
    <>
      <WrapperStyled>
        <ContainerStyled>
          <Navbar
          username={username}
          handleNewCupcake={handleNewCupcake}
          >
           {/*  */}
          </Navbar> 
            
      

          <MainStyled>
            <Cards 
              articles={articles} 
            />
          
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
