import React from 'react'
import Carousel from "../../components/carousel/Carousel";
import { BasketImage, BasketTitle, BasketPrice, LineWrapper, Icon, Rating, Feedback } from "./BasketCarousel.styled";
import FullStarSVG from "../../components/SVG/FullStarSVG";

import { theme } from "../../theme/Theme";

function BasketCarousel() {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder

    // Items, settings and style for the carousel :
    const items = [
        {
            image: `${PF}/data/panier-apero.webp`,
            name: "Panier apéritif",
            price: 45.00,
            rating: 4.9,
            feedback: 124
        },
        {
            image: `${PF}/data/panier-breakfast.webp`,
            name: "Panier petit-déjeuner",
            price: 35.00,
            rating: 4.4,
            feedback: 78
        },
        {
            image: `${PF}/data/panier-veggie.webp`,
            name: "Panier végétarien",
            price: 40.00,
            rating: 4.5,
            feedback: 142
        },
        {
            image: `${PF}/data/panier-italian.webp`,
            name: "Panier italien",
            price: 35.00,
            rating: 4.7,
            feedback: 201
        }
    ]

    const setting = {
        dragSpeed: 1.25,
        itemWidth: 280,
        itemHeight: 200,
        itemSideOffsets: 20
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
                <BasketImage src={item.image} />
                <BasketTitle>{item.name}</BasketTitle>
                <LineWrapper>
                    <Icon>
                        <FullStarSVG fill={theme.primaryColor}/>
                    </Icon>
                    <Rating>{item.rating}</Rating>
                    <Feedback>{`(${item.feedback} avis)`}</Feedback>
                </LineWrapper>
                <BasketPrice>{`${item.price.toFixed(2)}€`}</BasketPrice>
            </div>
            )) }
    </Carousel>
    )
}

export default BasketCarousel
