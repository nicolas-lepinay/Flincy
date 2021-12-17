import styled from "styled-components";
import { theme } from "../../theme/Theme";

export const MATERIAL_STYLE = {
    color: "black",
    cursor: "pointer",
    opacity: "0.6",
}

export const Panel = styled.div`
    background-color: white;
    border-radius: 10px;
    max-width: 600px;
    display: grid;
    grid-template-areas:
    "image name name"
    "image price price"
    "image shop buttons";
    column-gap: 1rem;
    grid-template-columns: 0.3fr 0.3fr 0.4fr;
    grid-template-rows: 0.333fr 0.333fr 0.333fr;
    margin-top: 20px;
    padding: 20px;
    width: 100%;
`

export const Image = styled.img`
    grid-area: image;
    border-radius: 10px;
    cursor: pointer;
    object-fit: cover;
    width: 90px;
    height: 100%;
`

export const Name = styled.div`
    grid-area: name;
    align-items: center;
    display: flex;
    font-size: 1.1rem;
    font-weight: 600;
    justify-content: space-between;
    position: relative;
`

export const Price = styled.div`
    grid-area: price;
    align-items: center;
    display: flex;
    font-size: 1rem;
    font-weight: 700;
    & span {
        font-size: 0.8rem;
        font-weight: 500;
        margin-left: 10px;
    }
`

export const Shop = styled.div`
    grid-area: shop;
    align-items: center;
    display: flex;
    font-size: 0.8rem;
`

export const Buttons = styled.div`
    grid-area: buttons;
    min-width: 120px;
`


export const ButtonsWrapper = styled.div`
    align-items: center;
    background-color: transparent;
    border-radius: 3rem;
    border: 2px solid ${theme.btnColor};
    color: ${theme.btnColor};
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    &>button {
        background-color: transparent;
        border: none;
        color: ${theme.btnColor};
        cursor: pointer;
        font-size: 1.5rem;
    }
    &>span {
        font-size: 1.1rem;
        font-weight: 700;
        padding: 0 5px;
    }
`