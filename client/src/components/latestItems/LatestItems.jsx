import React from 'react'
import { Wrapper, Image, GridLayout, Name, Price, Country, Weight, Rating, LineWrapper, Icon, Score, Feedback, Shop } from "./LatestItems.styled";
import FullStarSVG from "../../components/SVG/FullStarSVG";
import { theme } from "../../theme/Theme";
import { latestItems } from "../../dummyData"

function LatestItems() {

    return (
        <>
        { latestItems.map( (item, i) => (
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
