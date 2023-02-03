import styled from "styled-components"

export const Container = styled.div`
    margin-top: 5rem;
    background-color: gray;
    border: .5rem solid rgb(78, 78, 78);
    border-radius: 1rem;
    color: white;
    width: 40rem;
    margin-inline: auto;
`

export const List = styled.ul`
    text-align: center;
`

export const Item = styled.li`

    list-style: none;

    &:before {
        content: '•';
        color: rgb(78, 78, 78);
        font-weight: bold; 
        display: inline-block;
        width: 1em; 
        margin-left: -2.5em;
        font-size: 1.5rem;
    }
`
