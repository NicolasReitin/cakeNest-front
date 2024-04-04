import React from 'react'
import styled from 'styled-components';
import {theme} from '../../index.js';



export default function PrimaryButton({bgColor, width, content, icone, height, fontSize, fontWeight}) {
  return (
    <>
        <ButtonStyled 
            bgColor={bgColor} 
            width={width} 
            height={height}
            fontSize={fontSize}
            fontWeight={fontWeight}
        >{content} 
            <span>
                <img src={icone} />
            </span>
        </ButtonStyled>
    </>
  )
}

const ButtonStyled = styled.button`
    height: ${props => props.height || 'auto'};
    width: ${props => props.width};
    background: ${props => props.bgColor || theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${props => props.fontSize || '18px'};
    padding: 0 10%;
    font-weight: ${props => props.fontWeight || '600'};
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
