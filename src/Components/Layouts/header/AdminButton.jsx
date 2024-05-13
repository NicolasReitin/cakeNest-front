import React, { useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../../index'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

//install "npm install --save react-toastify"
// library toastify : https://fkhadra.github.io/react-toastify/installation/


export default function AdminButton() {

    const [isAdmin, setIsAdmin] = useState(false);

    const [menuIsUp, setMenuIsUp] = useState(false);

    const notify = () => {
        if(isAdmin) {
            setIsAdmin(false);
            setMenuIsUp(true);
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

    const toggleMenu = () => {
        setMenuIsUp(prevState => !prevState);
        console.log("Menu toggled:", menuIsUp);
    }

    
  return (
    <>
        <AdminButtonStyled 
            isAdmin={isAdmin} 
            onClick={notify}>
                <button>
                    {/* {console.log(isAdmin)} */}
                    <div className='ball-effect'></div>
                    {isAdmin ? "DÉSACTIVER LE MODE ADMIN" : "ACTIVER LE MODE ADMIN"}
                </button>

            <ToastContainer limit={6}/>
        </AdminButtonStyled>

        {isAdmin && (
            <MenuAdminBottom menuIsUp={menuIsUp}>
                <div className="menu-admin">
                    <ul>
                        {menuIsUp // si menu est en haut alors fleche vers le bas et inversement
                            ? <li><FiChevronDown  onClick={toggleMenu}/></li> 
                            : <li><FiChevronUp onClick={toggleMenu}/></li>
                        }
                        
                        <li><AiOutlinePlus /> Ajouter un produit</li>
                        <li><MdModeEditOutline />Modifier un produit</li>
                    </ul>
                </div>
            </MenuAdminBottom>
        )};
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
    background-color: ${({ isAdmin }) => (isAdmin ? theme.colors.white : theme.colors.dark)};
    border: solid 2px ${({ isAdmin }) => (isAdmin ? theme.colors.primary : 'transparent')};
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
    button{
        color: ${theme.colors.primary};
        background-color: transparent;
        cursor: pointer;
        border: none;
        text-decoration: none;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
const MenuAdminBottom = styled.div`
    position: fixed;
    bottom: 5.5%;
    left: 3%;
    right: 3%;
    width: calc(100% - 2 * 3%);
    height: ${({ menuIsUp }) => (menuIsUp ? '200px' : '0px')}; /* Modifier la hauteur en fonction de menuIsUp */
    background-color: ${theme.colors.background_white};
    border-radius: 0 0 10px 10px;
    box-shadow: 
    0 -5px 10px 0px rgba(0, 0, 0, 0.2), /* Shadow top */
    inset -10px 0 15px 0px rgba(0, 0, 0, 0.2), /* Shadow left */
    inset 10px 0 15px 0px rgba(0, 0, 0, 0.2), /* Shadow right */
    inset 10px 0 15px 0px rgba(0, 0, 0, 0.2); /* Shadow bottom */
    
    .menu-admin{
        position: absolute;
        top: -43px;
        left: 4%;
        background-color: ${theme.colors.background_white};
        z-index: 2;
        ul{
            display: flex;
            li{
                list-style: none;
                cursor: pointer;
                font-size:18px;
                border: solid 2px #c0c0c079;
                border-radius: 5px 5px 0 0;
                background-color: ${theme.colors.background_white};
                height: 100%;
                padding: 8px 20px;
                color: #98a5b5;
                &:hover{
                    background-color: #2a2729;
                    color: white;
                }

            }
        }
    }
`;

