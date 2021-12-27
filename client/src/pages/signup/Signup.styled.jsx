import styled from "styled-components";
import { theme } from "../../theme/Theme";

const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder

// const theme = {
//     bgColor: "rgba(252, 251, 242)",
//     btnColor: "rgba(252, 212, 8)",
//     darkGrey: "rgba(130, 130, 130)",
//     boxShadow1: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
//     boxShadow3: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
//     boxShadow6: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
//     boxShadow9: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
//     Poppins: "https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
//     height: "100%", // iPhone 13 viewport height :  "845px"
//     width: "100%" // iPhone 13 viewport width : "390px"
// }

export const MATERIAL_STYLE_LEFT = {
    opacity: "0.2",
    position: "absolute",
    width: "1.1rem",
    top: "2.3rem",
    left: "2rem"
}

export const MATERIAL_STYLE_RIGHT = {
    cursor: "pointer",
    opacity: "0.2",
    position: "absolute",
    width: "1.1rem",
    top: "2.3rem",
    left: "16.3rem"
}

export const SignupPage = styled.div`
    background-color: ${theme.primaryBgColor};
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
    position: relative;
`

export const Background = styled.div`
    background-image: url('${PF}/ui/props_black.webp');
    background-position: 0 70px; // Offset top
    background-repeat: repeat;
    height: 100vh;
    opacity: 0.05;
    overflow-y: hidden;
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
    padding: 50px 0 30px 0;
    position:absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    scroll-behavior: smooth;
    width: 100%;
`

export const Title = styled.span`
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: 1px;
`

export const Subtitle = styled.span`
    color: ${props => props.highlighted ? theme.btnColor : theme.darkGrey};
    cursor: ${props => props.highlighted ? "pointer" : "default"};
    font-size: 0.9rem;
    font-weight: ${props => props.bold ? "700" : "400"};
    &:hover { 
        text-decoration: ${props => props.highlighted ? "underline" : "none"};
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
`

export const Input = styled.input`
    @import url(${theme.mainFont});
    background-color: white;
    border: none;
    border-radius: 100px;
    box-shadow: ${theme.boxShadow6};
    font-family: 'Poppins', sans-serif;
    margin-top: 25px;
    padding: 1rem 1.8rem 1rem 4.2rem;
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
    &.firstName {
        padding: 1rem 1rem 1rem 4.2rem;
        width: 145px;
    }
    &.lastName {
        padding: 1rem 1rem 1rem 4.2rem;
        width: 145px;
    }
    &.address {
        padding: 1rem 3.8rem 1rem 4.2rem;
    }
    &.city {
        padding: 1rem 1rem 1rem 4rem;
        width: 160px;
    }
    &.zipcode {
        padding: 1rem 1.2rem;
        text-align: center;
        width: 120px;
    }
`

export const InputWrapper = styled.div`
    position: relative;
`

export const LineWrapper = styled.div`
    align-content: center;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 20px 0;
`

export const Row = styled.div`
    align-content: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Button = styled.button`
    background-color: ${theme.btnColor};
    border: none;
    border-radius: 10rem;
    box-sizing: border-box;
    color: black;
    cursor: pointer;
    display: inline-block;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
    margin-top: 20px;
    padding: 0.8rem 2rem;
    text-align: center;
    text-decoration: none;
    width: 300px;
    &:focus {
        outline: none;
    }
    &:hover {
        border: 2px solid white;
    }
`

export const Icon = styled.img`
    background-color: white;
    border:1px solid rgba(220, 220, 220);
    border-radius: 50px;
    box-sizing: content-box;
    cursor: pointer;
    height: 25px;
    margin: 5px 10px 20px 10px;
    padding:15px;
    width: 25px;
`