import styled from "styled-components";
import { theme } from "../../../theme/Theme";

export const Background = styled.div`
    background-color: rgba(255, 255, 255, 1);
    border-bottom: 2px solid ${theme.primaryColor};
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    height: calc(${theme.headerHeight} + 7.5rem);
    left: 0;
    margin: auto;
    max-width: 600px;
    padding-top: calc(${theme.headerHeight} + 2.5rem);
    right: 0;
    width: 100%;
`

export const ContentContainer = styled.div`
    border-radius: 40px;
    background-color: white;
    box-shadow: ${theme.boxShadow6};
    margin-top: 30px;
    padding-bottom: calc(${theme.navbarHeight} + 20px);
`

export const Title = styled.p`
    -webkit-filter: drop-shadow(0 0 0.5rem white);
    filter: drop-shadow(0 0 0.5rem white);
    font-size: 1.3rem;
    font-weight: 700;
    margin-left: 20px;
    padding-top: 25px;
`
