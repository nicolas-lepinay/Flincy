import React from 'react'
import Carousel from "../../components/carousel/Carousel";
import { Image, Title, Price, LineWrapper, Icon, Rating, Feedback } from "./BasketCarousel.styled";
import FullStarSVG from "../../components/SVG/FullStarSVG";

import { theme } from "../../theme/Theme";
import { basketItems, basketSetting, basketItemStyle } from "../../dummyData"

function BasketCarousel() {

    return (
        <Carousel _data={basketItems} {...basketSetting}>
        { basketItems.map((item, i) => (
            <div key={i} className='item' style={{ ...basketItemStyle }}>
                <Image src={item.image} />
                <Title>{item.name}</Title>
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

export default BasketCarousel
