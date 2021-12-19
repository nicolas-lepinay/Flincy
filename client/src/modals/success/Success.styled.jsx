import styled from "styled-components";
import { motion } from 'framer-motion';
import { theme } from "../../theme/Theme";

export const Backdrop = styled(props => <motion.div {...props} />)`
    align-items: center;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
`

export const Container = styled.div`
    background-color: white;
    border-radius: 50px;
    box-shadow: ${theme.boxShadow3};
    padding: 20px;
    position: relative;
    text-align: center;
    width: clamp(280px, 90vw, 500px);
    & h1 {
        color: rgb(50, 50, 50);
        font-size: 2rem;
        margin-top: 15px;
    }
    & h4 {
        color: rgb(50, 50, 50);
        font-size: 1rem;
        font-weight: 600;
    }
    & p {
        font-size: 0.85rem;
    }
    & img {
        width: 100%;
    }
`

export const Wrapper = styled.div`
    margin: 25px 0;
`

export const Button = styled.button`
    background-color: ${theme.btnColor};
    border: 2px solid ${theme.btnColor};
    border-radius: 3rem;
    color: white;
    cursor: pointer;
    font-size: 0.7rem;
    font-weight: 600;
    left: 0;
    letter-spacing: 1px;
    right: 0;
    margin: 10px 10px;
    padding: 15px 50px;
    text-transform: uppercase;
    &.ghost {
        background-color: transparent;
        color: ${theme.btnColor};
    }
`