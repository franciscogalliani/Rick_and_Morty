import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import { useState } from "react";



function App () {

  const [characters, setCharacters] = useState([])

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if(data.name && checkDuplicates(data.id) === undefined) {
          setCharacters([...characters, data]);
        } 
        else if(checkDuplicates(data.id)) window.alert('Ya elegiste este personaje')
        else window.alert('No hay personajes con ese ID') 
      })
  }

  const checkDuplicates = (id) => {
    return characters.find(char => char.id === id)
  }

  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id))
  }

  return (
    <div className='App'>
      <Nav onSearch={onSearch}/>
      <div>
        <Cards
          characters={characters}
          onClose={onClose}
        />
      </div>
    </div>
  )
}

export default App
