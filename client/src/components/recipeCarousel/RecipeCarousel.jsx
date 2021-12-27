import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Carousel from "../../components/carousel/Carousel";
import { Image, Title, Category, Price, LineWrapper, Icon, Rating, Feedback } from "./RecipeCarousel.styled";
import StarSVG from "../../components/SVG/StarSVG";
import { theme } from "../../theme/Theme";
import axios from "axios";

function RecipeCarousel() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder
    const [data, setData] = useState([]);
    const history = useHistory();

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

    useEffect ( () => {
        const fetchLatestItems = async () => {
            const categoryId = "61c49de1f045c90960534944"; // ID de la catégorie 'Recettes'
            const res = await axios.get(`/products/find?category=${categoryId}`); 
            setData(res.data.sort( (p1, p2) => { return new Date(p2.createdAt) - new Date(p1.createdAt) })); // Tri du plus récent au plus ancien
        }
        fetchLatestItems();
    }, []);

    return (
        <Carousel _data={data} {...setting}>
        { data.map((item, i) => (
            <div key={i} className='item' style={{ ...itemStyle }}>
                <Image src={`${PF}/data/${item.image}`} onClick={() => history.push(`/article/${item._id}`)}/>
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
