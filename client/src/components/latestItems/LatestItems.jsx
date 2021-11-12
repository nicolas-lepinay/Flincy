import React from 'react'
import { Wrapper, Image, GridLayout, Name, Price, Country, Weight, Rating, LineWrapper, Icon, Score, Feedback, Shop } from "./LatestItems.styled";
import FullStarSVG from "../../components/SVG/FullStarSVG";
import { theme } from "../../theme/Theme";

function LatestItems() {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder

    const items = [
        {
            image: `${PF}/data/grenade.webp`,
            name: "Grenades",
            country: "France",
            price: 2.50,
            weight: "250g",
            shop: "Epicerie&Co",
            rating: 4.9,
            feedback: 6
        },
        {
            image: `${PF}/data/kiwi.webp`,
            name: "Kiwi",
            country: "France",
            price: 1.30,
            weight: "La pièce",
            shop: "Epicerie&Co",
            rating: 4.9,
            feedback: 4
        },
        {
            image: `${PF}/data/vin-rouge.webp`,
            name: "Vin rouge",
            country: "France",
            price: 30.00,
            weight: "70cl",
            shop: "Epicerie&Co",
            rating: 4.9,
            feedback: 5
        },
        {
            image: `${PF}/data/steak-boeuf.webp`,
            name: "Steak de boeuf",
            country: "France",
            price: 5.25,
            weight: "500g",
            shop: "Epicerie&Co",
            rating: 4.9,
            feedback: 2
        }
    ]

    return (
        <>
        { items.map( (item, i) => (
            <div key={i}>
                <Wrapper>
                    <Image src={item.image} />
                    <GridLayout>
                        <Name>{item.name}</Name>
                        <Price>{item.price.toFixed(2)}€</Price>
                        <Country>{item.country}</Country>
                        <Weight>{item.weight}</Weight>
                        <Rating>
                            <LineWrapper>
                                <Icon>
                                    <FullStarSVG fill={theme.primaryColor}/>
                                </Icon>
                                <Score>{item.rating}</Score>
                                <Feedback>{`(${item.feedback} avis)`}</Feedback>
                            </LineWrapper>
                        </Rating>
                        <Shop>{item.shop}</Shop>
                    </GridLayout>
                </Wrapper>
            </div>
        ))}
        </>

    )
}

export default LatestItems
