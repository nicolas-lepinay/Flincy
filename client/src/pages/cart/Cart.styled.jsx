import styled from "styled-components";
import { theme } from "../../theme/Theme";

export const Content = styled.div`
    padding-top: ${theme.headerHeight};
    padding-bottom: ${theme.navbarHeight};
`

export const Checkout = styled.div`
    background-color: white;
    box-shadow: ${theme.boxShadow1};
    margin: 30px 0 90px 0;
    max-width: 600px;
    padding: 20px 30px;
    width: 100%;
    &>hr {
        margin: 15px auto;
        opacity: 0.1;
        width: 90%;
    }
`

export const Row = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    &>h3 {
        font-size: 1rem;
        text-transform: uppercase;
    }
    &>h1{
        font-size: 1.7rem;
    }
`

export const Button = styled.button`
    background-color: ${theme.btnColor};
    border: 2px solid ${theme.btnColor};
    border-radius: 3rem;
    color: #ffffff;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 1px;
    margin: 10px 0;
    padding: 15px 10px;
    text-transform: uppercase;
    width: 150px;
    &.ghost {
        background-color: transparent;
        color: ${theme.btnColor};
    }
`

export const Bubble = styled.div`
    align-items: center;
    background-color: ${theme.primaryColor};
    bottom: ${theme.navbarHeight};
    border-radius: 300px;
    display: flex;
    height: 70px;
    justify-content: space-evenly;
    left: 0;
    margin: auto;
    max-width: 600px;
    position: fixed;
    right: 0;
    width: 90%;
    &>img {
        border: 2px solid white;
        border-radius: 50%;
        height: 40px;
        object-fit: cover;
        width: 40px;
    }
`

export const Container = styled.div`
    align-items: center;
    background-color: white;
    bottom: 0;
    border-radius: 40px;
    box-shadow: ${theme.boxShadow9};
    display: flex;
    flex-direction: column;
    height: 400px;
    justify-content: space-evenly;
    left: 0;
    margin: auto;
    position: absolute;
    top: 0;
    right: 0;
    width: 80%;
    &>h3 {
        color: #aaaaaa;
        font-weight: 500;
    }
`