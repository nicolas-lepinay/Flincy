import React from 'react'
import ReactDom from 'react-dom';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { Backdrop, Container, Content, Button } from "./AddToCart.styled";

function AddToCart({ handleClose, product }) {

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
            y: "-30vh",
            opacity: 0,
            transition: {
                duration: 0.6,
                type: "tween"
            }
        }
    }

    return ReactDom.createPortal (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={ (e) => e.stopPropagation() }
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <Container>
                    <Content>
                        <h1>Ce produit a été ajouté à votre panier.</h1>
                        <h3>{product.quantity}<span>✖</span> {product.name} {product.weight && `(${product?.weight})`}</h3>
                        <Link to="/cart">
                            <Button onClick={handleClose}>Voir mon panier</Button>
                        </Link>
                        <Button className="ghost" onClick={handleClose}>Retour</Button>
                    </Content>

                </Container>

            </motion.div>
        </Backdrop>,
        document.getElementById('portal')
    )
}

export default AddToCart
