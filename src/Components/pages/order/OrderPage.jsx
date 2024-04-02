import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function OrderPage() {

  const {username} = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/')
  }

  return (
    <>
      <h1>Bonjour {username.charAt(0).toUpperCase() + username.slice(1)}</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Déconnexion</button>
      </form>
    </>
  )
}
