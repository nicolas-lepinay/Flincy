import styled from "styled-components";
import { theme } from "../../theme/Theme";

const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder

// const theme = {
//     bgColor: "rgba(18, 97, 84)",
//     btnColor: "rgba(247, 190, 0)",
//     width: "100%", // iPhone 13 viewport width : "390px"
//     height: "100%" // iPhone 13 viewport height :  "845px"
// }

export const LandingPage = styled.div`
    background-color: ${theme.secondaryBgColor};
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
    position: relative;
    z-index: 100; // Doit être
`

export const Background = styled.div`
    background-image: url('${PF}/ui/props_white.webp');
    background-position: 0 300px; // Offset pour positioner le logo dans la zone vide
    background-repeat: repeat;
    height: 100vh;
    opacity: 0.4;
    overflow-y: hidden;
    width: 100%;
`

export const Container = styled.div`
    align-items: center;
    /* border: 1px dashed white; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
    left: 50%;
    overflow-y: auto;
    padding: 280px 0 150px;
    position:absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    scroll-behavior: smooth;
    width: 100%;
`

export const Logo = styled.img`
    -webkit-filter: drop-shadow(0 0 1rem  ${theme.secondaryBgColor});
    filter: drop-shadow(0 0 1rem  ${theme.secondaryBgColor});
    margin-bottom: 150px;
    width: 70%;
    max-width: 220px;
`

export const Button = styled.span`
    background-color: ${props => props.ghost ? theme.secondaryBgColor : theme.btnColor};
    border: 2px solid ${theme.btnColor};
    border-radius: 10rem;
    color: white;
    display: inline-block;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    margin-top: 50px;
    padding: 0.8rem 2rem;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    width: 300px;
    transition: all 0.2s ease-in-out;
    &:hover {
        border: 2px solid rgba(255, 240, 205);
    }
`