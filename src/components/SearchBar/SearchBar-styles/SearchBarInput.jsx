import styled, { css } from 'styled-components';
const SearchBarInput = styled.input`
    width: 50px;
    height: 2rem;
    background-color: #70e65b;
    border: 2px solid #008000;
    border-radius: .4rem;
    transition: .4s;
    

    &:focus {
        box-shadow: 0px 0px 20px 5px #39ff14;
        outline: 2px solid #70e65b;
        width: 150px;
    }
    
`

export default SearchBarInput