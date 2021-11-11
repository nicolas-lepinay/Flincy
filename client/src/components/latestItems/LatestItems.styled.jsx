import styled from "styled-components";
import { theme } from "../../theme/Theme";

const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder

export const Wrapper = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    margin: 1.25rem 2.5rem 1.25rem 1.25rem;
`

export const Image = styled.img`
    border-radius: 10px;
    height: 80px;
    margin-right: 1.25rem;
    object-fit: cover;
    width: 80px;
`

export const GridLayout = styled.div`
    display: grid;
    grid-template-areas:
    "name price"
    "country weight"
    "rating shop";
    column-gap: 1rem;
    grid-template-columns: 1.3fr 0.7fr;
    grid-template-rows: 0.33fr 0.33fr 0.33fr;
    /* height: 80px; */
    width: 100%;
`

export const Name = styled.div`
    grid-area: name;
    background-color: #ffd000;
    font-size: 1rem;
    font-weight: 600;
`

export const Price = styled.div`
    grid-area: price;
    background-color: #55ff00;

`

export const Country = styled.div`
    grid-area: country;
    background-color: #00eeff;
`

export const Weight = styled.div`
    grid-area: weight;
    background-color: #0400ff;
`

export const Rating = styled.div`
    grid-area: rating;
    background-color: #aa00ff;

`

export const Shop = styled.div`
    grid-area: shop;
    background-color: #ff00b7;
    font-size: 0.7rem;
`