import React from 'react'
import styled from 'styled-components';
import {theme} from '../../index.js';


export default function Logo({marginBottom, marginTop}) {
  return (
    <>
        <LogoStyled marginBottom={marginBottom} marginTop={marginTop}>
            <a href="/">
                CAKE 
                <img src="/images/cupcake.png" alt="logo" />
                NEST
            </a>
        </LogoStyled>
    </>
    )
}

const LogoStyled = styled.h1`
    text-align: center;
    font-family: sans-serif;
    font-weight: regular 400;
    font-size: 38px;
    color: ${theme.colors.primary};
    margin-bottom: ${props => props.marginBottom || '0%'};
    margin-top: ${props => props.marginTop || '0%'};
    a{
        text-decoration: none;
        color: ${theme.colors.primary};
        white-space: nowrap;
    }
    img{
        vertical-align: -18px;
        width: 60px;
        margin: 0 10px;
    }
`
