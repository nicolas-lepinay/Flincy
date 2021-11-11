import styled from "styled-components";
import { theme } from "../../theme/Theme";

export const BasketImage = styled.img`
    border-radius: 15px;
    height: 55%;
    object-fit: cover;
    width: 100%;
`

export const BasketTitle = styled.span`
    font-size: 1rem;
    font-weight: 600;
    margin-top: 7px;
`

export const BasketPrice = styled.span`
    font-size: 0.75rem;
    font-weight: 600;
`

export const LineWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`

export const Icon = styled.div`
    display: flex;
    height: 100%;
    width: 10px; // Taille de l'étoile
`

export const Rating = styled.span`
    color: ${theme.primaryColor};
    font-size: 0.7rem;
    font-weight: 600;
    margin: 0 6px;
    text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
`

export const Feedback = styled.span`
    color: ${theme.darkGrey};
    font-size: 0.7rem;
    font-weight: 600;
`