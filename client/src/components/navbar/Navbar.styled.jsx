import styled from "styled-components";
import { theme } from "../../theme/Theme";

export const LEFT_POSITION = {
    home: "-80.5%",
    products: "-40.5%",
    cart: "-0.5%",
    profile: "39.5%",
    about: "79.5%"
}

export const Container = styled.div`
    align-items: flex-end;
    background-color: transparent!important;
    bottom: 0;
    box-sizing: border-box;
    display: flex;
    height: 260px;
    justify-content: center;
    left: 0;
    margin: auto;
    max-width: 700px;
    position: fixed;
    right: 0;
    width: 100%;
    z-index: 4;
`

export const IconWrapper = styled.div`
    align-items: center;
    display: flex;
    height: ${theme.navbarHeight};
    justify-content: center;
    position: relative;
    width: 100%;
    z-index: 2;
    &:before {
        content: '';
        position: absolute;
    }
`

export const Icon = styled.div`
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-bottom: 0px;
    width: 24px!important; // Taille des icônes
    z-index: 3;
    transition: 250ms 150ms cubic-bezier(0.14, -0.08, 0.74, 1.4);
`

export const BarWrapper = styled.div`
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    //filter: contrast(20);
    background-color: white!important;
    overflow: hidden;
    position: absolute;
    width: 100%;
`

export const Bar = styled.div`
    background-color: white;
    display: flex;
    /* filter: blur(10px); */
    height: ${theme.navbarHeight};
    justify-content: center;
    width: 100%;

`

export const Circle = styled.div`
    background: ${theme.primaryColor};
    border: 6px solid white;
    border-radius: 50%;
    height: 65px;
    left: 0;
    margin: auto;
    position: absolute;
    top: 160px;
    right: 0;
    width: 65px;
    z-index: 1;
    transition: 250ms 150ms cubic-bezier(0.14, -0.08, 0.74, 1.4);
`

/**
** Goes inside the Bar component
export const Indicator = styled.span`
    width: 70px;
    height: 70px;
    background-image: linear-gradient(0deg, #f7b0b0, rgba(183, 255, 154, 0)), linear-gradient(0deg, rgba(158, 255, 151, 0.75), rgba(183, 255, 154, 0)), linear-gradient(0deg, #b4fffb, rgba(183, 255, 154, 0));
    background-position: cover;
    background-position: 0 10px;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: -42px;
    right: 0;
    margin: auto;
    transition: 250ms 150ms cubic-bezier(0.14, -0.08, 0.74, 1.4);
`
*/