import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import tartImage from '/images/tarts.jpg';
import {theme} from '../../../index.js';
import PrimaryButton from '../reusable-ui/PrimaryButton.jsx';
import Logo from '../reusable-ui/Logo.jsx';

export default function LoginPage() {

//Etats
    const [error, setError] = useState('');
    const [firstName, setFirstName] = useState('');
    const navigate = useNavigate();

//comportements
    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName.trim() ==='') {
            setError('Veuillez entrer votre prénom')
        }else{
            setError('')
            // alert('Bonjour ' + firstName)
            // e.target.reset();
            navigate(`/order/${firstName}`)
        }
    }

    const handleInputChange = (e) => {
        setFirstName(e.target.value)
        setError('')
    }

//affichage
    return (
        <>
            <ContainerLoginStyle>
                <section>
                    <Logo 
                        src="/images/cupcake.png"
                    />
                    <h2>Bienvenue chez nous !</h2>
                    <hr />
                    <h3>Connectez vous</h3>

                    <FormLoginStyled onSubmit={handleSubmit}>
                        <InputLoginStyled 
                            type="text" 
                            name="firstName" 
                            value={firstName}
                            placeholder='Entrez votre prénom' 
                            onChange={handleInputChange}
                        />

                        <PrimaryButton />

                        {error && 
                            <p style={{color: 'red', fontStyle: 'italic'}}>{error}</p>
                        }
                    </FormLoginStyled>
                </section>
            </ContainerLoginStyle>
        </>
    )

}

    const ContainerLoginStyle = styled.div`
        width: 100%;
        height: 100vh;
        color: ${theme.colors.white};
        overflow: hidden;
        z-index: 0;

        &::before{
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url(${tartImage});
            background-size: cover;
            background-position: center;
            filter: brightness(0.5); /* Appliquer le filtre uniquement à l'image de fond */
            z-index: -1; /* Assurez-vous que l'image de fond est en arrière-plan */
        }
        
        section{
            position: absolute; 
            top: 50%; 
            left: 50%; 
            transform: translate(-50%, -50%); 
        }
        h2{
            text-align: center;
            font-weight: medium 500;
            font-family: "Pacifico", cursive;
            font-size: 48px;
            margin-bottom: 8%;
        }
        hr{
            margin: 0 auto;
            width: 500px;
            color: ${theme.colors.turquoise};
            height: 3px;
            background-color: ${theme.colors.loginLine};
            border: none;
            border-radius: 5px;
        }
        h3{
            text-align: center;
            font-family: "Pacifico", cursive;
            font-weight: medium 500;
            font-size: 38px;
            margin-top: 10%;
        }
    `

    const FormLoginStyled = styled.form`
        width: 500px;
        margin: 20px auto;
        display: flex;
        flex-direction: column;
        gap: 20px;
    `

    const InputLoginStyled = styled.input`
        height: 60px;
        font-size: 16px;
        padding-left: 50px;
        background-image: url('/icones/user.png');
        background-size: 30px;
        background-repeat: no-repeat;
        background-position: 10px center; 
        color: black;
        width: 448px;
        border-radius: 5px;
        border: none;

    `

