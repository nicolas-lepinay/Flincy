import React from 'react'
import Carousel from "../../components/carousel/Carousel";
import { Image, Title, Category, Price, LineWrapper, Icon, Rating, Feedback } from "./RecipeCarousel.styled";
import FullStarSVG from "../../components/SVG/FullStarSVG";

import { theme } from "../../theme/Theme";

function RecipeCarousel() {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder

    // Items, settings and style for the carousel :
    const items = [
        {
            image: `${PF}/data/blueberry-cheesecake.webp`,
            name: "Cheesecake à la myrtille",
            category: "Desserts",
            price: 15.25,
            rating: 4.7,
            feedback: 124
        },
        {
            image: `${PF}/data/chicken-pizza.webp`,
            name: "Pizza au poulet et champignons",
            category: "Pizza",
            price: 20.00,
            rating: 4.2,
            feedback: 78
        },
        {
            image: `${PF}/data/egg-burger.webp`,
            name: "Burger aux oeufs et emmental",
            category: "Burgers",
            price: 14.00,
            rating: 4.8,
            feedback: 142
        },
        {
            image: `${PF}/data/fish-chips.webp`,
            name: "Fish & Chips",
            category: "Plats chauds",
            price: 16.00,
            rating: 4.5,
            feedback: 201
        },
        {
            image: `${PF}/data/glazed-salmon.webp`,
            name: "Saumon laqué",
            category: "Plats chauds",
            price: 22.00,
            rating: 4.8,
            feedback: 175
        }
    ]

    const setting = {
        dragSpeed: 1.25,
        itemWidth: 120,
        itemHeight: 200,
        itemSideOffsets: 10
      };
  
      const itemStyle = {
        width: `${setting.itemWidth}px`,
        height: `${setting.itemHeight}px`,
        margin: `0 ${setting.itemSideOffsets}px`
      };

    return (
        <Carousel _data={items} {...setting}>
        { items.map((item, i) => (
            <div key={i} className='item' style={{ ...itemStyle }}>
                <Image src={item.image} />
                <Title>{item.name}</Title>
                <Category>{item.category}</Category>
                <LineWrapper>
                    <Icon>
                        <FullStarSVG fill={theme.primaryColor}/>
                    </Icon>
                    <Rating>{item.rating}</Rating>
                    <Feedback>{`(${item.feedback} avis)`}</Feedback>
                </LineWrapper>
                <Price>{`${item.price.toFixed(2)}€`}</Price>
            </div>
            )) }
    </Carousel>
    )
}

export default RecipeCarousel
