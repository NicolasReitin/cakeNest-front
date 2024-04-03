import React from 'react'
import styled from 'styled-components';
import {theme} from '../../../index.js';


export default function Logo({src}) {
  return (
    <>
        <LogoStyled>CAKE 
            <span>
                <img src={src} alt="logo" />
            </span> 
            NEST
        </LogoStyled>
    </>
    )
}

const LogoStyled = styled.h1`
    text-align: center;
    font-family: sans-serif;
    font-weight: regular 400;
    font-size: 38px;
    color: ${theme.colors.turquoise};
    margin-bottom: 20%;
    span{
        vertical-align: -18px;
        img{
            width: 60px;
            margin: 0 10px;
        }
    }
`
