import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../../index'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//install "npm install --save react-toastify"
// library toastify : https://fkhadra.github.io/react-toastify/installation/


export default function AdminButton() {

    const [isAdmin, setIsAdmin] = useState(false);
    
    const notify = () => {
        if(isAdmin) {
            setIsAdmin(false);
            toast.warning("Mode admin désactivé", {
                position: "bottom-right",
                autoClose: 2000,
                theme: "dark",
            });
        }else{
            setIsAdmin(true);
            toast.info("Mode admin actif", {
                position: "bottom-right",
                autoClose: 2000,
                theme: "dark",
            });
        }
    }

  return (
    <>
        <AdminButtonStyled isAdmin={isAdmin} onClick={notify}>
                <Link to="#" >
                    <div className='ball-effect'></div>
                    {isAdmin ? "DÉSACTIVER LE MODE ADMIN" : "ACTIVER LE MODE ADMIN"}
                </Link>
            <ToastContainer limit={6}/>
        </AdminButtonStyled>
    </>
  )
}

const AdminButtonStyled = styled.div`
    position: absolute;
    width: 280px;
    white-space: nowrap;
    padding: 20px;
    height: 50px;
    font-size: 12px;
    font-weight: 700;
    color: ${theme.colors.primary};
    text-decoration: none ;
    border-radius: 150px;
    ${({ isAdmin }) => isAdmin
        ? css`
            background-color: ${theme.colors.white};
            border: solid 2px ${theme.colors.primary}
        `
        : css`
            background-color: ${theme.colors.dark};
        `
    };
    display: flex;
    align-items: center;
    z-index: 2;
    cursor: pointer;
    .ball-effect{
        position: absolute;
        left: 10px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: ${theme.colors.primary};
        transition: transform 0.8s ease-in-out;
        transform: translateX(${({ isAdmin }) => (isAdmin ? '225px' : '0')});    
    }
    a{
        color: ${theme.colors.primary};
        text-decoration: none;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
