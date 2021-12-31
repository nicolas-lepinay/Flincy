import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Carousel from "../carousel/Carousel";
import { Image, Title, Price, LineWrapper, Icon, Rating, Feedback } from "./PanierCarousel.styled";
import StarSVG from "../SVG/StarSVG";
import { theme } from "../../theme/Theme";

import axios from "axios";

function BasketCarousel() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder
    const history = useHistory();
    const [paniers, setPaniers] = useState([]);

    const panierSetting = {
        dragSpeed: 1.25,
        itemWidth: 280,
        itemHeight: 200,
        itemSideOffsets: 20
      };
    
    const panierItemStyle = {
        width: `${panierSetting.itemWidth}px`,
        height: `${panierSetting.itemHeight}px`,
        margin: `0 ${panierSetting.itemSideOffsets}px`
    };

    useEffect ( () => {
        const fetchPaniers = async () => {
            const categoryId = "61c49e01f045c90960534946"; // ID de la catégorie 'Paniers'
            const res = await axios.get(`/products/find?category=${categoryId}`); 
            setPaniers(res.data.sort( (p1, p2) => { return new Date(p2.createdAt) - new Date(p1.createdAt) })); // Tri du plus récent au plus ancien
        }
        fetchPaniers();
    }, []);

    return (
        <Carousel _data={paniers} {...panierSetting}>
        { paniers.map((item, i) => (
            <div key={i} className='item' style={{ ...panierItemStyle }}>
                <Image 
                    src={`${PF}/data/${item.image}`} 
                    // onClick={() => history.push(`/article/${item._id}`)} 
                    />
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
