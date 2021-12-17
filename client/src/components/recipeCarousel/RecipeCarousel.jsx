import React from 'react';
import { useHistory } from "react-router-dom";
import Carousel from "../../components/carousel/Carousel";
import { Image, Title, Category, Price, LineWrapper, Icon, Rating, Feedback } from "./RecipeCarousel.styled";
import StarSVG from "../../components/SVG/StarSVG";

import { theme } from "../../theme/Theme";

function RecipeCarousel({ categoryId, data, setting, itemStyle }) {

    const history = useHistory();

    return (
        <Carousel _data={data} {...setting}>
        { data.map((item, i) => (
            <div key={i} className='item' style={{ ...itemStyle }}>
                <Image src={item.image} onClick={() => history.push(`/article/${item._id}`)}/>
                <Title>{item.name}</Title>
                <Category>{item?.category || item?.country}</Category>
                <LineWrapper>
                    <Icon>
                        <StarSVG fill={theme.primaryColor}/>
                    </Icon>
                    <Rating>{item.rating}</Rating>
                    <Feedback>{`(${item.feedback} avis)`}</Feedback>
                </LineWrapper>
                {item.price && <Price>{item?.weight ? `${item?.price.toFixed(2)}€ / ${item?.weight}` : `${item?.price.toFixed(2)}€`}</Price>}
            </div>
            )) }
    </Carousel>
    )
}

export default RecipeCarousel
