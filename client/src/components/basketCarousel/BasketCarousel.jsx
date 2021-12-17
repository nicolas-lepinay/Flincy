import React from 'react';
import { useHistory } from "react-router-dom";
import Carousel from "../../components/carousel/Carousel";
import { Image, Title, Price, LineWrapper, Icon, Rating, Feedback } from "./BasketCarousel.styled";
import StarSVG from "../../components/SVG/StarSVG";

import { theme } from "../../theme/Theme";
import { basketItems, basketSetting, basketItemStyle } from "../../dummyData"

function BasketCarousel() {

    const history = useHistory();

    return (
        <Carousel _data={basketItems} {...basketSetting}>
        { basketItems.map((item, i) => (
            <div key={i} className='item' style={{ ...basketItemStyle }}>
                <Image src={item.image} onClick={() => history.push(`/article/${item._id}`)} />
                <Title>{item.name}</Title>
                <LineWrapper>
                    <Icon>
                        <StarSVG fill={theme.primaryColor}/>
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
