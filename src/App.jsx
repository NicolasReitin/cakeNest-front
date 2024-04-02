import './App.css'

function App() {

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  }
  return (
    <>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez vous</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="" id="" placeholder='Entrez votre prénom...'/>
        <button type="submit">Accéder à votre espace</button>
      </form>
    </>
  )
}

export default App
