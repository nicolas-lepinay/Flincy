import React from 'react';
import { useHistory } from "react-router-dom";
import { Wrapper, Image, GridLayout, Name, Price, Country, Weight, Rating, LineWrapper, Icon, Score, Feedback, Shop } from "./LatestItems.styled";
import StarSVG from "../../components/SVG/StarSVG";
import { theme } from "../../theme/Theme";

function LatestItems({ data }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder
    const history = useHistory();
    
    return (
        <>
        { data.map( (item, i) => (
            <div key={i}>
                <Wrapper>
                    <Image src={`${PF}/data/${item.image}`} onClick={() => history.push(`/article/${item._id}`)}/>
                    <GridLayout>
                        <Name>{item.name}</Name>
                        {item.price && <Price>{item.price.toFixed(2)}€</Price>}
                        <Country>{item?.category || item?.country}</Country>
                        <Weight>{item?.weight}</Weight>
                        <Rating>
                            <LineWrapper>
                                <Icon>
                                    <StarSVG fill={theme.primaryColor}/>
                                </Icon>
                                <Score>{item.rating}</Score>
                                <Feedback>{`(${item.feedback} avis)`}</Feedback>
                            </LineWrapper>
                        </Rating>
                        <Shop>{item?.shop}</Shop>
                    </GridLayout>
                </Wrapper>
            </div>
        ))}
        </>

    )
}

export default LatestItems
