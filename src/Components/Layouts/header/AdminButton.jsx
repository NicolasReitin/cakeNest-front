import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../index'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AdminButton() {
    
    const notify = () => {
        toast.info('🦄 Wow so easy!', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        })
    };

  return (
    <>
        <AdminButtonStyled>
            <Link to="#" onClick={notify}>
                ACTIVER LE MODE ADMIN
            </Link>
            <ToastContainer />
        </AdminButtonStyled>
    </>
  )
}

const AdminButtonStyled = styled.div`
    margin-left: 120%;
    white-space: nowrap;
    padding: 20px;
    height: 50px;
    font-size: 14px;
    font-weight: 700;
    color: ${theme.colors.primary};
    text-decoration: none ;
    border-radius: 150px;
    background-color: ${theme.colors.dark};
    display: flex;
    align-items: center;
    a{
        color: ${theme.colors.primary};
        text-decoration: none;
    }
`
