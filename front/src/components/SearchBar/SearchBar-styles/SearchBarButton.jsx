import styled, { css } from 'styled-components';
const SearchBarButton = styled.button`
    padding: 5px 20px;
    display: inline-block;
    color: #008000;
    text-decoration: none;
    font-size: 1.4rem;
    border-radius: .5rem;
    transition: .4s;
    height: 2.5rem;
    padding-top: 0;

    &:hover {
        color: #111;
        background-color: #70e65b;
        box-shadow: 0 0 50px #39ff14;
    }
`

export default SearchBarButton