import styled from "styled-components";
import { theme } from "../../theme/Theme";

export const MATERIAL_STYLE = {
    SEARCH : {
        top: "0.95rem",
        left: "1.5rem",
        opacity: "0.3",
        position: "absolute",
        width: "1.5rem"
    }
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

export const Title = styled.p`
    -webkit-filter: drop-shadow(0 0 0.5rem white);
    filter: drop-shadow(0 0 0.5rem white);
    font-size: 1.3rem;
    font-weight: 700;
    margin-left: 20px;
    padding-top: 25px;
`

export const ContentContainer = styled.div`
    border-radius: 40px;
    background-color: white;
    box-shadow: ${theme.boxShadow6};
    padding-bottom: calc(${theme.navbarHeight} + 20px);
`

export const PopularImage = styled.img`
    border-radius: 20px;
    box-shadow: ${theme.boxShadow9};
    display: block;
    margin: 30px auto;
    width: 85%;
`

export const LineWrapper = styled.div`
    align-items: baseline;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const SeeMore = styled.span`
    color: ${theme.secondaryColor};
    font-size: 0.75rem;
    font-weight: 600;
    margin-right: 20px;
`
