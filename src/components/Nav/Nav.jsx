import SearchBar from '../SearchBar/SearchBar'
import NavContainer from './Nav-styles/NavContainer'

function Nav({ onSearch }){
    return (
        <NavContainer>
            <SearchBar
          onSearch={onSearch}
        />
        </NavContainer>
    )
}

export default Nav