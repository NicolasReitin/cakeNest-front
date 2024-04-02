import './assets/css/App.css'

function App() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Bonjour ' + e.target[0].value)
    e.target.reset();
  }
  return (
    <>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez vous</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="" placeholder='Entrez votre prénom...' required/>
        <button type="submit">Accéder à votre espace</button>
      </form>
    </>
  )
}

export default App
