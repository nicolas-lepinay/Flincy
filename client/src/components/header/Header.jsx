import React from 'react'
import { Container, LineWrapper, LineWrapper2, Title, PageTitle, Subtitle } from "./Header.styled";
import { SVG_STYLE } from "./Header.styled";
import { theme } from "../../theme/Theme";
import MessageSVG from "../SVG/MessageSVG";
import LocationSVG from "../SVG/LocationSVG";
import CheckSVG from "../SVG/CheckSVG";
import { ArrowBackIosRounded } from '@material-ui/icons';

function Header(props) {

    const HeaderWithUser = ( { user } ) => {
        return (
            <Container>
                <LineWrapper>
                    <Title>Bienvenue, { user.firstName }</Title>
                    <MessageSVG style={SVG_STYLE.MESSAGE} />
                </LineWrapper>

                <LineWrapper2>
                    <LocationSVG fill={theme.primaryColor} style={SVG_STYLE.LOCATION} />
                    <Subtitle>{ user.city } ({ user.departement })</Subtitle>
                    <CheckSVG fill={theme.primaryColor} style={SVG_STYLE.LOCATION} />
                </LineWrapper2>
            </Container>
        )
    }

    const HeaderWithoutUser = (props) => {
        return (
            <Container>
                <LineWrapper>
                    <ArrowBackIosRounded style={SVG_STYLE.ARROW}/>
                    <PageTitle>{props.children}</PageTitle>
                    <MessageSVG style={SVG_STYLE.MESSAGE} />
                </LineWrapper>
            </Container>)
    }

    return (
        <>
            {props.user ? <HeaderWithUser {...props}/> : <HeaderWithoutUser {...props}/>}
        </>
    )
}

export default Header
