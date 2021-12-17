import styled from "styled-components";
import { theme } from "../../theme/Theme";

export const FONTAWESOME_STYLE = {
    EDIT:{
        color: `${theme.secondaryColor}`,
        cursor: "pointer",
        height: "25px",
        position: "absolute",
        top: "57px",
        right: "30px",
        width: "25px"
    },
    CIRCLE:{
        color: `${theme.primaryColor}`,
        cursor: "pointer",
        height: "25px",
        width: "25px"
    },
}

export const Background = styled.div`
    background-color: rgba(255, 255, 255, 1);
    border-bottom: 2px solid ${theme.primaryColor};
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    height: calc(${theme.headerHeight} + 8.125rem);
    left: 0;
    margin: auto;
    max-width: 600px;
    padding-top: calc(${theme.headerHeight} + 2.5rem);
    width: 100%;
`

export const Heading = styled.h4`
    font-size: 0.9rem;
    font-weight: 700;
    margin: -20px 0 15px 40px;
`

export const Hours = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
    margin: 30px 20px;
    & input[type=radio] {
        display: none;
    }
    & input[type=radio]:checked + p {
        background-color: ${theme.secondaryColor};
        border: none;
        color: white;
        font-size: 0.75rem;
        font-weight: 600;        
    }
    & p {
        background-color: rgb(255, 255, 255);
        border: 2px solid ${theme.primaryColor};
        border-radius: 10px;
        cursor: pointer;
        font-size: 0.7rem;
        padding: 15px 5px;
        text-align: center;
    }
`

export const Title = styled.h4`
    font-size: 0.9rem;
    font-weight: 700;
    margin-bottom: 20px;
`

export const Circle = styled.div`
    border: 3px solid ${theme.primaryColor};
    border-radius: 100%;
    height: 20px;
    position: relative;
    width: 20px;
    transition: all 0.25s linear;
    &:before {
        border-radius: 100%;
        content: '';
        display: block;
        height: 8px;
        left: 3px;
        margin: auto;
        position: absolute;
        top: 3px;
        width: 8px;
        transition: all 0.25s linear;
    }
`

export const Container = styled.div`
    background-color: white;
    border-radius: 20px;
    left: 0;
    margin: 30px auto;
    padding: 20px;
    position: relative;
    right: 0;
    width: 90%;
    &>p {
        font-size: 0.85rem;
        line-height: 1.4rem;
    }
    &>label {
        align-items: center;
        display: flex;
        font-size: 0.85rem;
        justify-content: space-between;
        line-height: 2rem;
        &>input[type=radio] {
            display: none;
        }
        &>input[type=radio]:checked ~ ${Circle} {
            border: 3px solid ${theme.primaryColor};
            &:before {
                background: ${theme.primaryColor};
            }
        }
        &>.wrapper {
            display: flex;
            &>h4 {
                color: #00008f;
                margin-right: 1rem;
            }
        }
    }
`

export const CardInfo = styled.div`
    &>hr {
        margin: 20px 0 10px 0;
        opacity: 0.2;
    }
    & input {
        @import url(${theme.mainFont});
        background-color: rgb(245, 245, 245);
        border: none;
        border-radius: 100px;
        font-family: 'Poppins', sans-serif;
        margin-top: 15px;
        padding: 0.7rem 1.5rem;
        width: 100%;
        &:focus {
            outline: none;
        }
        &::placeholder {
            color: black;
            font-weight: 600;
            opacity: 0.4;
            text-shadow: none;
        }
    }
`

export const Row = styled.div`
    column-gap: 1rem;
    display: flex;
    justify-content: space-between;
    &>span {
        align-self: center;
        font-size: 0.9rem;
        font-weight: 600;
        flex: 40;
        margin-top: 15px;
        text-align: center;
    }
    &>input {
        flex: 30;   
    }
`