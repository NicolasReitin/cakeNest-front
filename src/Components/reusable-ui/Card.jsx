import React from 'react'
import styled from 'styled-components'
import PrimaryButton from '@/Components/reusable-ui/PrimaryButton'
import { theme } from '../../index'
import {formatPrice} from '../../utils/maths'


export default function Card({articleId, imageSource, title, price, alt}) {
  return (
    <>
        <CardStyled key={articleId}>
            <div className='image'>
                <img src={imageSource || '/images/cupcake-item.png'} alt={alt} />
            </div>
            <h2>{title}</h2>
            <PriceAndCart>
                <p>{formatPrice(price)}</p>
                <PrimaryButton 
                    content='Ajouter'
                    height='30px'
                    fontSize='10px'
                    fontWeight='600'
                />
            </PriceAndCart>
        </CardStyled>
    </>
  )
}

const CardStyled = styled.div`
    padding: 15px 25px;
    max-width: 180px;
    height: 230px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: 5%;
    .image{
        display: flex;
        justify-content: center;
    }
    img{
        max-width: 150px;
        margin-bottom: 5%;
    }
    h2{
        font-family: "Pacifico", cursive;
        font-size: 18px;
        margin-bottom: 15%;
    }

`
const PriceAndCart = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        white-space: nowrap;
        font-family: "Open Sans", "sans-serif";
        color: ${theme.colors.primary};
        font-size: 16px;
        font-weight: 400;
    }
`


