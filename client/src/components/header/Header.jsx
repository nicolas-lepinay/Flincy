import React from 'react'
import { Container, LineWrapper, LineWrapper2, Title, Subtitle } from "./Header.styled";
import { SVG_STYLE } from "./Header.styled";
import { theme } from "../../theme/Theme";
import MessageSVG from "../SVG/MessageSVG";
import LocationSVG from "../SVG/LocationSVG";
import CheckSVG from "../SVG/CheckSVG";

function Header(props) {
    return (
        <Container>
            <LineWrapper>
                <Title>Bienvenue, {props.username}</Title>
                <MessageSVG style={SVG_STYLE.MESSAGE} />
            </LineWrapper>

            <LineWrapper2>
                <LocationSVG fill={theme.primaryColor} style={SVG_STYLE.LOCATION} />
                <Subtitle>{props.city} ({props.departement})</Subtitle>
                <CheckSVG fill={theme.primaryColor} style={SVG_STYLE.LOCATION} />
            </LineWrapper2>
        </Container>
    )
}

export default Header
