import React from 'react'
import styled from "styled-components";
import { Search } from '@material-ui/icons';
import { EventOutlined } from '@material-ui/icons';

import { theme } from "../../theme/Theme";

const MATERIAL_STYLE = {
    SEARCH : {
        bottom: "0",
        top: "0",
        left: "1.5rem",
        margin: "auto",
        opacity: "0.3",
        position: "absolute",
        width: "1.5rem"
    },
    EVENT: {
        bottom: "0",
        color: "white",
        cursor: "pointer",
        top: "0",
        right: "1.7rem",
        margin: "auto",
        position: "absolute",
        width: "1.4rem"
    }
}

const Input = styled.input`
    @import url(${theme.mainFont});
    background-color: white;
    border: none;
    border-radius: 100px;
    box-shadow: ${theme.boxShadow6};
    font-family: 'Poppins', sans-serif;
    max-width: 500px;
    min-width: 300px;
    padding: 0.8rem 4.7rem 0.8rem 4rem;
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

const InputWrapper = styled.div`
    position: relative;
    display: inline-block;
    left: 50%;
    margin: 40px 0 20px 0;
    transform: translateX(-50%);
`

const Calendar = styled.div`
    background-color: ${theme.secondaryColor};
    bottom: 0;
    border-radius: 100px;
    cursor: pointer;
    height: 85%;
    right: 0.3rem;
    margin: auto;
    position: absolute;
    top: 0;
    width: 4.3rem;
`

function SearchBar({ calendar}) {

    const SearchBarSimple = () => {
        return (
            <InputWrapper>
                <Search style={MATERIAL_STYLE.SEARCH}/>
                <Input type="text" placeholder="Rechercher"/>
            </InputWrapper>
        )
    }
    
    const SearchBarWithCalendar = () => {
        return (
            <InputWrapper>
                <Search style={MATERIAL_STYLE.SEARCH}/>
                <Input type="text" placeholder="Rechercher"/>
                <Calendar/>
                <EventOutlined style={MATERIAL_STYLE.EVENT}/>
            </InputWrapper>
        )
    }

    return (
        <>
            {calendar ? <SearchBarWithCalendar/> : <SearchBarSimple/> }
        </>
    )
}



export default SearchBar
