import SearchBar from '../SearchBar/SearchBar'
import NavContainer from './Nav-styles/NavContainer'
import LinksContainer from './Nav-styles/LinksContainer'
import SearchBarButton from '../SearchBar/SearchBar-styles/SearchBarButton'
import { NavLink } from 'react-router-dom'

function Nav({ onSearch }){
    return (
        <NavContainer>
            <LinksContainer>
                <NavLink to='/home'><SearchBarButton>Home</SearchBarButton></NavLink>
                <NavLink to='/about'><SearchBarButton>About</SearchBarButton></NavLink>
            </LinksContainer>
            <SearchBar
          onSearch={onSearch}
        />
        </NavContainer>
    )
}

export default Nav