import styled from "styled-components";
import { theme } from "../../theme/Theme";

export const Content = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 30px 0;
    padding-top: ${theme.headerHeight};
    padding-bottom: ${theme.navbarHeight};
`

export const Button = styled.button`
    background-color: ${theme.btnColor};
    border: none;
    border-radius: 3rem;
    color: #ffffff;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 1px;
    margin: 15px 0;
    padding: 15px 10px;
    text-transform: uppercase;
    width: 80%;
`