import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Background, Wrapper, Container, Slide, Subtitle, Title, Text, DotsWrapper, ButtonsWrapper, Button, ButtonLink } from "./Welcome.styled";
import { FiberManualRecord } from '@material-ui/icons';
import { MATERIAL_STYLE } from "./Welcome.styled";

const slides = [
    {
        subtitle: "Bienvenue",
        title: "Notre concept",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam."
    },
    {
        subtitle: "Une affaire de goût",
        title: "Nos partenaires",
        text: "Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper."
    },
    {
        subtitle: "La qualité avant tout",
        title: "Nos engagements",
        text: "Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo."
    }
]

export default function Welcome() {

    const [index, setIndex] = useState(0);

    // const prevButton = useRef();

    const next = () => {
        index === (slides.length - 1) ? setIndex(0) : setIndex(index + 1)
    }

    const previous = () => {
        index === 0 ? setIndex(slides.length - 1) : setIndex(index - 1)
    }
    

    return (
        <>
            <Background />
            <Wrapper>
                <Container>
                    <TransitionGroup component={Slide}>
                        <CSSTransition key={`slide-${index}`} timeout={800} classNames="transition">
                            <Slide>
                                <Subtitle>{slides[index].subtitle}</Subtitle>
                                <Title>{slides[index].title}</Title>
                                <Text>{slides[index].text}</Text>
                            </Slide>
                        </CSSTransition>
                    </TransitionGroup>

                    <DotsWrapper>
                        {slides.map((slide, i) => (
                            <FiberManualRecord key={`dot-${i}`} onClick={() => setIndex(i)} style={index === i ? MATERIAL_STYLE.FULL : MATERIAL_STYLE.EMPTY}/>
                        ))}
                    </DotsWrapper>

                    <ButtonsWrapper>
                        <Button onClick={previous} style={{visibility: index === 0 ? 'hidden' : 'visible' }}>Précédent</Button>
                        
                        {index < (slides.length - 1) 
                        ? <Button onClick={next}>Suivant</Button>
                        : <ButtonLink href="/home">Entrer</ButtonLink>}
                    </ButtonsWrapper>
                </Container>
            </Wrapper>
        </>
    )
}
