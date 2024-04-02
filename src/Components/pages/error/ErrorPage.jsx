import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/')
  }

  return (
    <>
      <h1>Erreur 404</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Retour à la page d'accueil</button>
      </form>
    </>
  )
}
