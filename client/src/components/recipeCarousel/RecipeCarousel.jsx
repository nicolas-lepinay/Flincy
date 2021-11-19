import React, { useState } from 'react'
import Carousel from "../../components/carousel/Carousel";
import { Image, Title, Category, Price, LineWrapper, Icon, Rating, Feedback } from "./RecipeCarousel.styled";
import FullStarSVG from "../../components/SVG/FullStarSVG";

import { theme } from "../../theme/Theme";

function RecipeCarousel({ data, setting, itemStyle }) {
    return (
        <Carousel _data={data} {...setting}>
        { data.map((item, i) => (
            <div key={i} className='item' style={{ ...itemStyle }}>
                <Image src={item.image} />
                <Title>{item.name}</Title>
                <Category>{item?.category || item?.country}</Category>
                <LineWrapper>
                    <Icon>
                        <FullStarSVG fill={theme.primaryColor}/>
                    </Icon>
                    <Rating>{item.rating}</Rating>
                    <Feedback>{`(${item.feedback} avis)`}</Feedback>
                </LineWrapper>
                <Price>{item?.weight ? `${item.price.toFixed(2)}€ / ${item.weight}` : `${item.price.toFixed(2)}€`}</Price>
            </div>
            )) }
    </Carousel>
    )
}

export default RecipeCarousel
