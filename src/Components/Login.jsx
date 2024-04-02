import React, { useState } from 'react'

export default function Login() {

//Etats
    const [error, setError] = useState('');
    const [firstName, setFirstName] = useState('');

//comportements
    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName.trim() ==='') {
            setError('Veuillez entrer votre prénom')
        }else{
            setError('')
            alert('Bonjour ' + firstName)
            e.target.reset();
        }
    }

    const handleInputChange = (e) => {
        setFirstName(e.target.value)
        setError('')
    }

//affichage
    return (
        <>
            <h1>Bienvenue chez nous !</h1>
            <h2>Connectez vous</h2>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="firstName" 
                    value={firstName}
                    placeholder='Entrez votre prénom...' 
                    onChange={handleInputChange}
                />
                <button type="submit">Accéder à votre espace</button>
                {error && 
                    <p style={{color: 'red', fontStyle: 'italic'}}>{error}</p>
                }
            </form>
        </>
    )
}
