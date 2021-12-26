import React, { useState, useEffect } from 'react'
import { ButtonsWrapper, Button, Row } from './Item.styled'
import axios from "axios";

// Redux :
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";

// Modal addToCart :
import AddToCart from "../../modals/addToCart/AddToCart.jsx"
import { AnimatePresence } from 'framer-motion';

function Item({ itemId }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder
    // const [quantity, setQuantity] = useState(1);
    const [item, setItem] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchItem = async () => {
            const res = await axios.get(`/products/find/${itemId}`); 
            setItem(res.data);
        }
        fetchItem();
    }, [itemId]);

    useEffect(() => {
    }, [itemId]);

    const addItemToCart = () => {
        dispatch(addProduct({ ...item, quantity:1 }));
        openModal();
    }

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
            <Row>
                <img src={`${PF}/data/${item.image}`} />
                <h3>{item.name}</h3>
                <p>{item?.price && `${item?.price.toFixed(2)}€ / ${item.weight}`}</p>
                {/* <ButtonsWrapper className="ghost">
                    <button onClick={handleMinus}>–</button>
                    <span>{quantity}</span>
                    <button onClick={handlePlus}>+</button>
                </ButtonsWrapper> */}
                <Button onClick={addItemToCart}>+</Button>
            </Row>

            <AnimatePresence 
            initial={false} 
            exitBeforeEnter={true} 
            onExitComplete={() => null}
            >
            {isOpen && <AddToCart handleClose={closeModal} product={{...item, quantity:1}}/>}
        </AnimatePresence>
        </>
    )
}

export default Item
