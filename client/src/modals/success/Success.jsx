import React, { useEffect } from 'react'
import ReactDom from 'react-dom';
import { Link, useHistory } from "react-router-dom";
import { motion } from 'framer-motion';
import { Backdrop, Container, Wrapper, Button } from "./Success.styled";

import axios from 'axios';

function Success({ handleClose }) {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder
    const history = useHistory();

    const dropIn = {
        hidden: {
            y: "-20vh",
            opacity: 0
        },
        visible: {
            y: "0",
            opacity: 1,
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 30,
                stiffness: 500,
                mass: 2
            }
        },
        exit: {
            y: "-50vh",
            opacity: 0,
            transition: {
                duration: 0.5,
                type: "tween"
            }
        }
    }

    return ReactDom.createPortal (
        <Backdrop onClick={() => { handleClose(); history.push('/home')}}>
            <motion.div
                onClick={ (e) => e.stopPropagation() }
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <Container>
                    <img src={`${PF}/ui/order-completed.webp`} />
                    <h1>Merci beaucoup</h1>
                    <h4>d'avoir commandé sur Flincy !</h4>
                    <Wrapper>
                        <p>Votre commande va être prise en charge.</p>
                        <p>Vous serez informé(e) lors de sa livraison.</p>
                    </Wrapper>
                    <Link to="/profile">
                        <Button onClick={handleClose}>Suivre ma commande</Button>
                    </Link>

                    <Link to="/home">
                        <Button className="ghost" onClick={handleClose}>Retour</Button>
                    </Link>
                </Container>

            </motion.div>
        </Backdrop>,
        document.getElementById('portal')
    )
}

export default Success
