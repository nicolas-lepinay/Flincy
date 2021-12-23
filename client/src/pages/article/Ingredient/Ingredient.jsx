import React, { useState, useEffect } from 'react';
import { useParams} from "react-router-dom";

import { latestIngredients, recipeItems, latestItems, basketItems, recommandations, allIngredients, latestRecipes, recommandationsRecipes, allRecipes, recipeIngredients } from "../../../dummyData";

// Corps de page :
import PageContainer from "../../../components/pageContainer/PageContainer";
import { MATERIAL_STYLE, ImageContainer, ContentContainer, Wrapper, Name, HeartContainer, GridLayout, Country, Ratings, Feedback, Price, Weight, StarsWrapper, Shop, Description, CartContainer, LineWrapper, ButtonsWrapper, AddButton, List, Row, Separator } from './Ingredient.styled'
import { ArrowBackIosRounded } from '@material-ui/icons';
import StarSVG from '../../../components/SVG/StarSVG.jsx';
import ToggleHeart from '../../../components/toggleHeart/ToggleHeart.jsx';
import { theme } from "../../../theme/Theme";

import { useHistory } from "react-router-dom";

// Modal addToCart :
import AddToCart from "../../../modals/addToCart/AddToCart"
import { AnimatePresence } from 'framer-motion';

function Ingredient({ article }) {

    // const [article, setArticle] = useState({});
    const [stars, setStars] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [isOpen, setIsOpen] = useState(false);

    const history = useHistory();

    // Affichage du nombre d'étoiles selon la note :
    useEffect(() => {
        let i;
        let arr = [];
        for(i = 1; i < article.rating; i++) {
            arr.push(<StarSVG key={i} fill={theme.primaryColor}/>)
        }
        for(let j = i; j <= 5; j++) {
            arr.push(<StarSVG key={j} fill={'none'}/>)
        }
        setStars(arr);
    });

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
            <ImageContainer source={article.image}>
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
                        <Price>{article.price && `${article.price.toFixed(2)}€`}</Price>
                        <Weight>{article?.weight}</Weight>
                    </GridLayout>
                    <Shop>Vendu par {article?.shop}</Shop>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.</Description>
                </Wrapper>
            
                <CartContainer>
                    <LineWrapper>
                        <h3>Quantité</h3>
                        <ButtonsWrapper>
                            <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>–</button>
                            <span>{quantity}</span>
                            <button onClick={() => setQuantity(quantity + 1)}>+</button>
                        </ButtonsWrapper>
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

export default Ingredient