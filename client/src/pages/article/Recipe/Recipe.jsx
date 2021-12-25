import React, { useState, useEffect } from 'react';

// Corps de page :
import PageContainer from "../../../components/pageContainer/PageContainer";
import { MATERIAL_STYLE, ImageContainer, ContentContainer, HeartContainer, Wrapper, Name, GridLayout, Country, Ratings, Feedback, Price, Weight, StarsWrapper, Shop, Description, CartContainer, LineWrapper, ButtonsWrapper, AddButton, List, Row, Separator } from './Recipe.styled'
import { ArrowBackIosRounded } from '@material-ui/icons';
import StarSVG from '../../../components/SVG/StarSVG.jsx';
import ToggleHeart from '../../../components/toggleHeart/ToggleHeart.jsx';
import { theme } from "../../../theme/Theme";

import { useHistory } from "react-router-dom";

// Modal addToCart :
import AddToCart from "../../../modals/addToCart/AddToCart"
import { AnimatePresence } from 'framer-motion';

// Item component :
import Item from "../../../components/item/Item"

function Recipe({ article }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder

    const [stars, setStars] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [isOpen, setIsOpen] = useState(false);

    const history = useHistory();

    // Affichage du nombre d'étoiles selon la note :
    useEffect(() => {
        let i;
        let arr = [];
        // Etoiles pleines :
        for(i = 1; i < article.rating; i++) {
            arr.push(<StarSVG key={i} fill={theme.primaryColor}/>)
        }
        // Etoiles vides :
        for(let j = i; j <= 5; j++) {
            arr.push(<StarSVG key={j} fill={'none'}/>)
        }
        setStars(arr);
    }, [article]);

    const openModal = () => {
        setIsOpen(true);
        document.getElementById('root').style.transition = '0.5s filter ease-in-out';
        document.getElementById('root').style.filter = 'blur(4px)';
    }

    const closeModal = () => {
        setIsOpen(false);
        document.getElementById('root').style.filter = 'blur(0px)';
    }

    return (
        <>
        <PageContainer blank>
            <ImageContainer source={`${PF}/data/${article.image}`}>
                <ArrowBackIosRounded onClick={history.goBack} style={MATERIAL_STYLE.ARROW}/>
            </ImageContainer>

            <ContentContainer>
                <HeartContainer>
                    <ToggleHeart/>
                </HeartContainer>
                <Wrapper>
                    <GridLayout>
                        <Name>{article.name}</Name>
                        <Country>{article?.country}</Country>
                        <Ratings>
                            <StarsWrapper>
                                {stars}
                            </StarsWrapper>
                        </Ratings>
                        <Feedback>{article.rating} étoiles ({article.feedback} avis)</Feedback>
                        <Price>{article?.price && `${article.price.toFixed(2)}€`}</Price>
                        <Weight>{article?.weight}</Weight>
                    </GridLayout>
                    <Shop>Vendu par {article?.shop}</Shop>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.</Description>
                    <List>
                        <Separator></Separator>
                        <h3>Les ingrédients</h3>
                        {article.ingredients.map( (itemId) => (
                            <Item itemId={itemId}/>
                        ))}
                    </List>
                </Wrapper>
            
                <CartContainer>
                    <LineWrapper>
                        <h3>Total</h3>
                        <h3>XX.XX€</h3>
                    </LineWrapper>

                    <AddButton onClick={openModal}>Ajouter au panier</AddButton>

                </CartContainer>
            </ContentContainer>

        </PageContainer>

        <AnimatePresence 
            initial={false} 
            exitBeforeEnter={true} 
            onExitComplete={() => null}
        >
            {isOpen && <AddToCart handleClose={closeModal} product={{...article, quantity}}/>}
        </AnimatePresence>

    </>
    )
}

export default Recipe
