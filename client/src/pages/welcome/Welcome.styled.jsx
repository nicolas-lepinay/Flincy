import styled from "styled-components";

const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder

const theme = {
    gradientColor: "rgba(252,200,8,1)",
    textColor: "rgb(60, 60, 60)",
    bgImage: `${PF}/ui/breakfast.webp`,
    maxWidth: "700px"
}

// Style pour les puces (dots) du slider :
export const MATERIAL_STYLE = {
    FULL: {
        cursor: "pointer",
        margin: "0 3px",
        opacity: "1",
        width: "0.8rem"
    },
    EMPTY: {
        cursor: "pointer",
        margin: "0 3px",
        opacity: "0.4",
        width: "0.8rem"
    },
}

export const Background = styled.div`
    background-image: linear-gradient(360deg, ${theme.gradientColor} 30%, rgba(0,0,0,0) 60%), url(${theme.bgImage});
    background-position: center;
    background-size: cover;
    height: 100vh;
`

export const Wrapper = styled.div`
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    overflow: hidden;
    overflow-wrap: break-word;
    position: absolute;
    width: 100vw;
    height: 100%;
`

export const Container = styled.div`
    color: ${theme.textColor};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    max-width: ${theme.maxWidth};
    padding: 40px 30px;
    position: relative!important;
    width: 100vw;
`

export const Slide = styled.div`
    margin-bottom: 70px;
    max-width: ${theme.maxWidth};
    padding: 0 30px;
    width: 100vw;
    position: absolute;
    bottom: 0;
    left: 0;

    .transition-enter {
        opacity: 0;
        transform: translateX(${theme.maxWidth});
    }
    .transition-enter-active {
        opacity: 1;
        transform: translateX(0);
        transition: all 800ms ease-in
    }
    .transition-exit {
        opacity: 1;
        transform: translateX(0);
    }
    .transition-exit-active {
        opacity: 0;
        transform: translateX(-${theme.maxWidth});
        transition: all 800ms ease-in
    }

`

export const Title = styled.h1`
    font-size: 2.1rem;
    margin-top: -5px;
    margin-bottom: 10px;
`

export const Subtitle = styled.h2`
    font-size: 1.4rem;
    font-weight: 500;

`

export const Text = styled.p`
    font-size: 0.9rem;
    padding-right: 10px;
`

export const DotsWrapper = styled.div`
    align-items: center;    
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;    
    justify-content: space-between;
    margin-top: 25px;
`

export const Button = styled.span`
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    width: auto;
    &:hover {
        text-decoration: underline dotted;
    }
`

export const ButtonLink = styled.a`
    color: ${theme.textColor};
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-decoration: none;
    width: auto;
    &:hover {
        text-decoration: underline dotted;
    }
`