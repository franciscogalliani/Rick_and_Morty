import SearchBarContainer from "./SearchBar-styles/SearchBarContainer"
import SearchBarInput from "./SearchBar-styles/SearchBarInput"
import SearchBarButton from "./SearchBar-styles/SearchBarButton"
import { useState } from "react";

// import { search } from "./SearchBar-scripts/search.js"

function SearchBar({ onSearch }) {
   const [input, setInput] = useState('')
   const inputHandler = (event) => {
      setInput(event.target.value)
   }

const random = (min, max) => {
      min = Math.ceil(1);
      max = Math.floor(4)
      return Math.floor(Math.random() * (max - min + 1) + min);
   }
   
   return (
      <SearchBarContainer>
            <SearchBarInput type='search' value={input} onChange={inputHandler}></SearchBarInput>
            <SearchBarButton onClick={() => onSearch(input)}>Agregar</SearchBarButton>
            <SearchBarButton onClick={() => console.log(onSearch(random()))}>Random</SearchBarButton>
      </SearchBarContainer>
   );
}

export default SearchBar