import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, IconWrapper, Icon, BarWrapper,  Bar, Circle, LEFT_POSITION } from "./Navbar.styled";
import { theme } from "../../theme/Theme";
import HomeSVG from "../SVG/HomeSVG";
import ProductsSVG from "../SVG/ProductsSVG";
import CartSVG from "../SVG/CartSVG";
import ProfileSVG from "../SVG/ProfileSVG";
import AboutSVG from "../SVG/AboutSVG";

export default function Navbar() {

    const home = useRef(null); const products = useRef(null);
    const cart = useRef(null);
    const profile = useRef(null);
    const about = useRef(null);
    const circle = useRef(null);

    const liftUp = (target) => {
        const refArray = [home, products, cart, profile, about];

        refArray.map( (ref) => (
            ref === target ? ref.current.style.marginBottom = "280%" : ref.current.style.marginBottom = "0" 
        ));
    }

    useEffect( () => {
        if(window.location.pathname === "/home") {
            liftUp(home);
            circle.current.style.left = LEFT_POSITION.home;
        }
        else if (window.location.pathname === "/products") {
            liftUp(products);
            circle.current.style.left = LEFT_POSITION.products;
        }
        else if (window.location.pathname === "/cart") {
            liftUp(cart);
            circle.current.style.left = LEFT_POSITION.cart;
        }
        else if (window.location.pathname === "/profile") {
            liftUp(profile);
            circle.current.style.left = LEFT_POSITION.profile;
        }
        else if (window.location.pathname === "/about") {
            liftUp(about);
            circle.current.style.left = LEFT_POSITION.about;
        }
    })

    return (
        <Container>
            <IconWrapper>
                <Link to="/home">
                    <Icon ref={home}>
                        <HomeSVG stroke={theme.secondaryColor} />
                    </Icon>
                </Link>
            </IconWrapper>

            <IconWrapper>
                <Link to="/products">
                    <Icon ref={products}>
                        <ProductsSVG stroke={theme.secondaryColor} fill={theme.secondaryColor} />
                    </Icon>
                </Link>
            </IconWrapper>

            <IconWrapper>
                <Link to="/cart">
                    <Icon ref={cart}>
                        <CartSVG fill={theme.secondaryColor} />
                    </Icon>
                </Link>
            </IconWrapper>

            <IconWrapper>
                <Link to="/profile">
                    <Icon ref={profile}>
                        <ProfileSVG fill={theme.secondaryColor} />
                    </Icon>
                </Link>
            </IconWrapper>

            <IconWrapper>
                <Link to="/about">
                    <Icon ref={about}>
                        <AboutSVG fill={theme.secondaryColor} />
                    </Icon>
                </Link>
            </IconWrapper>

            <Circle ref={circle}/>

            <BarWrapper>
                <Bar/>
            </BarWrapper>
    </Container>
    )
}
