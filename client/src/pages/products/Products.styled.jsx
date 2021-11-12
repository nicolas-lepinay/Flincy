import styled from "styled-components";
import { theme } from "../../theme/Theme";

const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder

export const Background = styled.div`
    background-color: rgba(255, 255, 255, 1);
    border-bottom: 2px solid ${theme.primaryColor};
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    height: calc(${theme.headerHeight} + 12.125rem);
    left: 0;
    margin: auto;
    max-width: 600px;
    padding-top: calc(${theme.headerHeight} + 4rem);
    right: 0;
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