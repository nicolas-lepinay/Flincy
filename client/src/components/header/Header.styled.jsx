import styled from "styled-components";
import { theme } from "../../theme/Theme";

export const SVG_STYLE = {
    LOCATION : {
        height: "1rem",
        width: "1rem"
    },
    MESSAGE : {
        cursor: "pointer",
        height: "1.2rem",
        width: "1.2rem"
    },
    ARROW : {   
        color: theme.secondaryColor,
        cursor: "pointer",
        height: "1.4rem",
        width: "1.4rem"
    }
}

export const Container = styled.div`
    background-color: #ffffff;
    /* border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px; */
    box-shadow: ${theme.boxShadow9};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: ${theme.headerHeight};
    left: 0;
    margin: auto;
    max-width: 500px;
    padding: 0 1.5rem;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    z-index: 1000;
    @media (min-width: 500px) {
        border-bottom-left-radius: 25px;
        border-bottom-right-radius: 25px; 
    }
`

export const LineWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const Title = styled.p`
    font-size: 1.2rem;
    font-weight: 600;

`

export const PageTitle = styled.p`
    font-size: 1.3rem;
    font-weight: 700;

`

export const LineWrapper2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`

export const Subtitle = styled.p`
    color: ${theme.darkGrey};
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 2;
    margin: 0 21px 0 7px;
    text-transform: uppercase;
`