import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import { useState } from "react";
import { Route, Routes } from 'react-router-dom'



function App () {

  const [characters, setCharacters] = useState([])

  const onSearch = (character) => {
    fetch(`http://localhost:3001/rickandmorty/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if(data.name && checkDuplicates(data.id) === undefined) {
          setCharacters([...characters, data]);
        } 
        else if(checkDuplicates(data.id)) window.alert('Ya elegiste este personaje')
      })
      .catch(error => alert(error))
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
      <Routes>
      <Route
          exact
          path='/home'
          element={<Cards
            characters={characters}
            onClose={onClose}
          />}
        />
        <Route
          exact
          path='/detail/:detailId'
          element={<Detail/>}
        />
        <Route
          exact
          path='/about'
          element={<About/>}
        />
        </Routes>
    </div>
  )
}

export default App
