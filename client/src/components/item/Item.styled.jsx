import styled from "styled-components";
import { theme } from "../../theme/Theme";


export const Row = styled.div`
    align-items: center;
    column-gap: 0.5rem;
    display: grid;
    grid-template-areas:
    "img ingredient button"
    "img info button";
    grid-template-rows: 0.5fr 0.5fr;
    grid-template-columns: 0.4fr 1.2fr 0.4fr;
    margin: 1rem 0;
    width: 100%;
    &>img {
        grid-area: img;
        border-radius: 50%;
        height: 40px;
        object-fit: cover;
        width: 40px;
    }
    &>h3 {
        grid-area: ingredient;
        font-size: 0.8rem;
        font-weight: 700;
    }
    &>p {
        grid-area: info;
        font-size: 0.8rem;
        font-weight: 500;
    }
`

export const ButtonsWrapper = styled.div`
    align-items: center;
    background-color: ${theme.secondaryColor};
    border-radius: 3rem;
    border: 2px solid white;
    color: white;
    display: flex;
    flex-direction: row;
    &>button {
        background-color: transparent;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 1.5rem;
        padding: 0 20px 5px 20px;
    }
    &>span {
        padding: 0 25px;
    }
    &.ghost {
        grid-area: button;
        background-color: transparent;
        border: 2px solid ${theme.btnColor};
        color: ${theme.btnColor};
        &>button {
            color: ${theme.btnColor};
        }
        &>span {
        padding: 0 7px;
    }
}
`