import React from 'react'
import styled from "styled-components";
import { theme } from "../../theme/Theme";

const Input = styled.input`
    @import url(${theme.mainFont});
    background-color: white;
    border: none;
    border-radius: 100px;
    box-shadow: ${theme.boxShadow6};
    font-family: 'Poppins', sans-serif;
    max-width: 500px;
    min-width: 300px;
    padding: 1rem 4rem;
    width: 90vw;
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: rgb(59, 59, 59);
        font-family: 'Poppins', sans-serif;
        opacity: 0.5;
        text-shadow: none;
    }
`

function SearchBar() {
    return (
        <Input type="text" placeholder="Rechercher"/>
    )
}

export default SearchBar
