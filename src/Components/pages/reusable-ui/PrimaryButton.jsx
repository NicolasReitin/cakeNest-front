import React from 'react'
import styled from 'styled-components';
import {theme} from '../../../index.js';



export default function PrimaryButton({bgColor}) {
  return (
    <>
        <ButtonStyled bgColor={bgColor} >Mon espace 
            <span>
                <img src="/icones/droit.png" alt="next" />
            </span>
        </ButtonStyled>
    </>
  )
}

const ButtonStyled = styled.button`
    height: 60px;
    width: 100%;
    /* background: ${theme.colors.turquoise}; */
    background: ${props => props.bgColor || theme.colors.turquoise};
    color: ${theme.colors.white};
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    border: none;
    span{
        img{
            width: 16px;
            vertical-align: -2px;
        }
    }
    &:hover{
        background: ${theme.colors.loginLine};
    }
`;
