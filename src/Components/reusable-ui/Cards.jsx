import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {fakeMenu} from '../../assets/fakeData/fakeMenu.js'
import Card from './Card.jsx'
import {formatPrice} from '../../utils/maths.js'



export default function Cards({articles}) {
  // sans axios
    // const articles = fakeMenu

 
  return (
    <>
      <CardsStyled>
        {
          articles.map((article) => (
            <Card 
              key={article.id}
              imageSource={article.imageSource}
              title={article.title}
              price={article.price}
            />
          ))
        }
      </CardsStyled>

    </>
  )
}

const CardsStyled = styled.div`
    padding: 10px 50px 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Définit le nombre de colonnes en fonction de la largeur des cartes */
    grid-row-gap: 60px;
    justify-content: center; /* Centre les cartes horizontalement */
    align-items: center; /* Centre les cartes verticalement */
    margin: 0 auto; 
`
