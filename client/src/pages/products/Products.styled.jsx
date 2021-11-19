import styled from "styled-components";
import { theme } from "../../theme/Theme";

export const Background = styled.div`
    background-color: rgba(255, 255, 255, 1);
    border-bottom: 2px solid ${theme.primaryColor};
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    height: calc(${theme.headerHeight} + 12.125rem);
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

export const Input = styled.input`
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
export const ItemsWrapper = styled.span`
    display: flex;
    flex-direction: column;
    margin: 20px 0 100px 0;
`

export const Item = styled.span`
    background-color: ${theme.secondaryColor};
    border-radius: 30px;
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
    left: 0;
    margin: 15px auto;
    min-width: 300px;
    padding: 40px 20px;
    text-align: center;
    right: 0;
    width: 85%;
`