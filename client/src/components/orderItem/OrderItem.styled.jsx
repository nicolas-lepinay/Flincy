import styled from "styled-components";
import { theme } from "../../theme/Theme";

export const Container = styled.div`
    background-color: white;
    border-radius: 20px;
    box-shadow: ${theme.boxShadow6};
    cursor: pointer;
    left: 0;
    margin: 30px auto;
    padding: 20px;
    position: relative;
    right: 0;
    width: 90%;
    &>.date {
        font-size: 0.9rem;
        font-weight: 600;
        text-align: center;
    }
    &>.number {
        color: ${theme.darkGrey};
        font-size: 0.7rem;
        margin: 10px 0 20px 0;
        text-align: center;
    }
    &>h4{
        font-size: 0.9rem;
        font-weight: 600;
        margin: 20px 0 5px 0;
    }
    &>.address{
        font-size: 0.9rem;
    }
`

export const Images = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: auto;
    max-width: 600px;
    width: 100%;
    &>img {
        border-radius: 50%;
        height: 40px;
        object-fit: cover;
        width: 40px;
    }
`