import styled from "styled-components";
import { theme } from "../../theme/Theme";

const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder

export const MATERIAL_STYLE = {
    SEARCH : {
        top: "0.95rem",
        left: "1.5rem",
        opacity: "0.3",
        position: "absolute",
        width: "1.5rem"
    }
}

export const PageContent = styled.div`
    height: 100%;
    margin-top: ${theme.headerHeight};
    max-width: 600px;
    width: 100%;
`

export const InputWrapper = styled.div`
    position: relative;
    display: inline-block;
    left: 50%;
    margin: 40px 0 20px 0;
    transform: translateX(-50%);
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
