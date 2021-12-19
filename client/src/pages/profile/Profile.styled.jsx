import styled from "styled-components";
import { theme } from "../../theme/Theme";

export const MATERIAL_STYLE = {
    LOGOFF: {
        color: "black",
        cursor: "pointer",
        fontSize: "1.2rem",
        marginRight: "8px",
    },
    INPUT: {
        opacity: "0.2",
        position: "absolute",
        width: "1.3rem",
        top: "1.5rem",
        left: "1.5rem",
    }
}

export const Background = styled.div`
    background-color: rgba(255, 255, 255, 1);
    border-bottom: 2px solid ${theme.primaryColor};
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    height: calc(${theme.headerHeight} + 9rem);
    left: 0;
    margin: auto;
    max-width: 600px;
    padding-top: calc(${theme.headerHeight} + 1.7rem);
    right: 0;
    width: 100%;
`

export const ToggleSwitch = styled.label`
    display: inline-block;
    height: 60px;
    left: 50%;
    margin-bottom: 1.7rem;
    max-width: 500px;
    min-width: 300px;
    position: relative;
    transform: translateX(-50%);
    width: 90%;
`

export const Checkbox = styled.input`
    height: 0;
    opacity: 0;
    width: 0;
    &:checked + .slider:before {
        transform: translateX(calc(100% - 8px));
    }
`

export const Slider = styled.span`
    background-color: #ffffff;
    border: 1px solid ${theme.primaryColor};
    border-radius: 100px;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    top: 0;
    right: 0;
    &:before {
        background-color: ${theme.primaryColor};
        bottom: 4px;
        border-radius: 100px;
        content: "";
        height: 50px;
        left: 4px;
        position: absolute;
        width: 50%;
        transition: 0.5s;
    }
`

export const Title = styled.span`
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 600;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    width: 50%;
    &.left {
        color: white;
        left: 4px;
        transition: 0.3s;
    }
    &.right {
        color: rgba(40, 40, 40);
        right: 4px;
        transition: 0.3s;
    }
`

export const FlexContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding:  40px 20px;
    &>h1 {
        font-size: 1.7rem;
        margin: 20px 0 10px 0;
    }
    & h4 {
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: 600;
        &:hover {
            text-decoration: underline dotted 1px;
        }
    }
`

export const Picture = styled.img`
    align-items: center;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    height: 130px;
    justify-content: center;
    object-fit: cover;
    width: 130px;
`

export const Row = styled.div`
    align-items: center;
    display: flex;
`

export const Form = styled.form`
    margin: 20px 0 80px 0;
`

export const Input = styled.input`
    @import url(${theme.mainFont});
    background-color: white;
    border: none;
    border-radius: 100px;
    box-shadow: ${theme.boxShadow6};
    font-family: 'Poppins', sans-serif;
    margin: 10px 0;
    padding: 0.9rem 2rem 0.9rem 4.2rem;
    width: 300px;
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: rgb(59, 59, 59);
        font-family: 'Poppins', sans-serif;
        opacity: 0.5;
        text-shadow: none;
    }
`

export const InputWrapper = styled.div`
    position: relative;
`

export const Button = styled.button`
    background-color: ${theme.btnColor};
    border: none;
    border-radius: 10rem;
    box-sizing: border-box;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin-top: 20px;
    padding: 0.8rem 2rem;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    width: 300px;
    &:focus {
        outline: none;
    }
    &:hover {
        border: 2px solid white;
    }
`