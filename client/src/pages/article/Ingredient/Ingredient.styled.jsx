import styled from "styled-components";
import { keyframes } from 'styled-components'
import { theme } from "../../../theme/Theme";

const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder

export const MATERIAL_STYLE = {
    ARROW : {   
        color: "white",
        cursor: "pointer",
        height: "1.5rem",
        margin: "50px 0 0 25px",
        width: "1.5rem"
    },
    STAR: {

    }
}

const heart = keyframes`
 0% { }
 18% { font-size: 0 }
`

const bubble = keyframes`
  15% {
    -webkit-transform: scale(1);
    transform: scale(1);
    border-color: #cc8ef5;
    border-width: 2.25rem;
  }
  30% { }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    border-color: #cc8ef5;
    border-width: 0;
  }
`

const sparkles = keyframes`
  0% { }
  20% {
    opacity: 0;
  }
  25% {
    opacity: 1;
    box-shadow: 0.32476rem -2.4375rem 0 0rem #ff8080,
      -0.32476rem -2.0625rem 0 0rem #ffed80,
      2.1082rem -1.26585rem 0 0rem #ffed80,
      1.41004rem -1.53985rem 0 0rem #a4ff80,
      2.30412rem 0.85901rem 0 0rem #a4ff80, 2.08305rem 0.14233rem 0 0rem #80ffc8,
      0.76499rem 2.33702rem 0 0rem #80ffc8, 1.18748rem 1.71734rem 0 0rem #80c8ff,
      -1.35019rem 2.0552rem 0 0rem #80c8ff,
      -0.60229rem 1.99916rem 0 0rem #a480ff,
      -2.44865rem 0.22578rem 0 0rem #a480ff,
      -1.93852rem 0.77557rem 0 0rem #ff80ed,
      -1.70323rem -1.77366rem 0 0rem #ff80ed,
      -1.81501rem -1.03204rem 0 0rem #ff8080;
  }
`

export const ImageContainer = styled.div`
    background: linear-gradient(to top, transparent 50%, rgba(0, 0, 0, 0.9)), center / cover no-repeat url(${props => props.source});
    background-position: top;
    width: 100%;
    height: 350px;
`

export const ContentContainer = styled.div`
    background-color: white;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    box-shadow: ${theme.boxShadow1};
    margin-top: -30px;
    position: relative;
    width: 100%;
`

export const Wrapper = styled.div`
    padding: 40px 30px 0 30px;
`

export const HeartContainer = styled.div`
    align-items: center;
    background: white;
    border-radius: 50%;
    box-shadow: ${theme.boxShadow3};
    display: flex;
    height: 60px;
    justify-content:center;
    position: absolute;
    top: -30px;
    right: 40px;
    width: 60px;
`

export const GridLayout = styled.div`
    display: grid;
    grid-template-areas:
    "name name"
    "country price"
    "ratings price"
    "feedback weight";
    row-gap: 0.2rem;
    grid-template-columns: 1.3fr 0.7fr;
    grid-template-rows: 0.25fr 0.25fr 0.25fr 0.25fr;
    margin-bottom: 20px;
    width: 100%;
`

export const Name = styled.span`
    grid-area: name;
    /* background-color: #ffd000; */
    font-size: 1.5rem;
    font-weight: 700;
`

export const Country = styled.span`
    grid-area: country;
    /* background-color: #ff5100; */
    color: ${theme.darkGrey};
    font-size: 0.9rem;
    font-weight: 700;
`

export const Ratings = styled.span`
    grid-area: ratings;
    /* background-color: #30a800; */
    font-size: 1rem;
    font-weight: 700;
`
export const StarsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    & svg {
        height: 0.95rem;
        margin-right: 0.5rem;
        stroke: ${theme.primaryColor};
        width: 0.95rem;
    }
`
export const Feedback = styled.span`
    grid-area: feedback;
    /* background-color: #00aeff; */
    color: ${theme.primaryColor};
    font-size: 0.75rem;
    font-weight: 700;
`

export const Price = styled.span`
    grid-area: price;
    /* background-color: #6f00ff; */
    font-size: 2rem;
    font-weight: 700;
    align-self: center;
    justify-self: right;
`

export const Weight = styled.span`
    grid-area: weight;
    /* background-color: #ff00aa; */
    font-size: 0.9rem;
    font-weight: 500;
    justify-self: right;
`

export const Shop = styled.span`
    font-size: 1rem;
    font-weight: 600;
`

export const Description = styled.p`
    color: rgb(70, 70, 70);
    font-size: 0.8rem;
    font-weight: 500;
    text-align: justify;
    padding: 10px 0 50px 0;
`

export const Separator = styled.hr`
    left: 0;
    margin: 0 auto 30px auto;
    opacity: 0.2;
    right: 0;
    width: 80%;
`

export const CartContainer = styled.div`
    align-items: space-between;
    background-color: ${theme.secondaryBgColor};
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    box-shadow: ${theme.boxShadow1};
    display: flex;
    flex-direction: column;
    height: 320px;
    position: relative;
    width: 100%;
    &:before {
        position: absolute;
        content:'';
        background: center url('${PF}/ui/props_white.webp');
        background-repeat: no-repeat;
        height: 100%;
        opacity: 0.07;
        width: 100%;
    }
`

export const LineWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 40px 35px 40px 35px;
    z-index: 10;
    &>h3{
        color: white;
        font-size: 0.8rem;
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
`

export const ButtonsWrapper = styled.div`
    align-items: center;
    background-color: ${theme.secondaryColor};
    border-radius: 3rem;
    border: 2px solid white;
    color: white;
    display: flex;
    flex-direction: row;
    &>button {
        background-color: transparent;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 1.5rem;
        padding: 0 20px 5px 20px;
    }
    &>span {
        padding: 0 25px;
    }
    &.ghost {
        grid-area: button;
        background-color: transparent;
        border: 2px solid ${theme.btnColor};
        color: ${theme.btnColor};
        &>button {
            color: ${theme.btnColor};
        }
        &>span {
        padding: 0 7px;
    }
}
`

export const AddButton = styled.button`
    background-color: ${theme.btnColor};
    border: 2px solid ${theme.btnColor};
    border-radius: 3rem;
    color: white;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 600;
    left: 0;
    letter-spacing: 1px;
    right: 0;
    margin: 0 auto;
    padding: 15px 60px;
    text-transform: uppercase;
    z-index: 10;
    transition: all 0.2s ease-in-out;
    &:hover {
        border: 2px solid rgba(255, 240, 205);
        scale: 1.05;
    }
`

export const List = styled.div`
    padding-bottom: 30px;
`

export const Row = styled.div`
    align-items: center;
    column-gap: 0.5rem;
    display: grid;
    grid-template-areas:
    "img ingredient button"
    "img info button";
    grid-template-rows: 0.5fr 0.5fr;
    grid-template-columns: 0.4fr 1.2fr 0.4fr;
    margin: 1rem 0;
    width: 100%;
    &>img {
        grid-area: img;
        border-radius: 50%;
        height: 40px;
        object-fit: cover;
        width: 40px;
    }
    &>h3 {
        grid-area: ingredient;
        font-size: 0.8rem;
        font-weight: 700;
    }
    &>p {
        grid-area: info;
        font-size: 0.8rem;
        font-weight: 500;
    }
`