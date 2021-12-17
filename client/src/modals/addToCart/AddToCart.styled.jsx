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
    border-radius: 50% / 10%;
    box-shadow: ${theme.boxShadow3};
    /* max-width: 90vw;
    min-width: 300px; */
    height: 430px;
    position: relative;
    width: clamp(280px, 80vw, 500px);
    &:before {
        content: "";
        position: absolute;
        top: 10%;
        bottom: 10%;
        right: -5%;
        left: -5%;
        background: white;
        border-radius: 5% / 50%;
    }
`

export const Content = styled.div`
    align-items: center;
    bottom: 0;
    display: flex;
    flex-direction: column;
    height: 90%;
    justify-content: space-evenly;
    left: 0;
    margin: auto;
    padding: 20px 20px;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    width: 100%;
    & h1 {
        font-size: 1.8rem;
    }
    & h3 {
        font-size: 1.1rem;
        font-weight: 600;
        &>span {
            font-size:  0.8rem;
            margin-right: 5px;
        }
    }
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
    margin: 0 auto;
    padding: 15px 50px;
    text-transform: uppercase;
    &.ghost {
        background-color: transparent;
        color: ${theme.btnColor};
    }
`