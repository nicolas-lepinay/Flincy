import styled from "styled-components";
import { theme } from "../../theme/Theme";

const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder


export const Wrapper = styled.div`
    background-color: ${theme.primaryBgColor};
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
`

export const Background = styled.div`
    background-image: url('${PF}/ui/props_black.webp');
    background-position: 0 70px; // Offset top
    background-repeat: repeat;
    height: 100vh;
    opacity: 0.04;
    overflow: hidden;
    width: 100%;
`

export const Container = styled.div`
    align-items: center;
    /* border: 1px dashed white; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    left: 50%;
    overflow-y: auto;
    overflow-x: hidden;
    /* margin-top: ${theme.headerHeight}; */
    position:absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    scroll-behavior: smooth;
    width: 100%;
`