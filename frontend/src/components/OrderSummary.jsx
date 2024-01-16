import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import Input from "./Input";
import Button from "./Button";
import Modal from './Modal.jsx';
import OrderConfirmation from './OrderConfirmation.jsx';
import { postOrderToDB } from '../http.js';
import { cartActions } from '../store/cart.js';
import { orderSummaryActions } from '../store/orderSummary.js';
import { CATEGORIES } from '../store/cart.js';


export default function OrderSummary() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart);

    let filteredCart = { ...cart };

    for (let key in filteredCart) {
        if (Array.isArray(filteredCart[key]) && filteredCart[key].length === 0) {
            delete filteredCart[key];
        }
    }

    function handleCloseModal() {
        setModalIsOpen(false);
        dispatch(cartActions.resetCart());
        dispatch(orderSummaryActions.onBackToHomePage());
    };

    function handleSubmit(event) {
        event.preventDefault();
        setModalIsOpen(true);

        const fd = new FormData(event.target);
        const fields = Object.fromEntries(fd.entries());

        postOrderToDB({ ...fields, userOrder: JSON.stringify(filteredCart) });
    };


    return (<>

        <Modal open={modalIsOpen} onClose={handleCloseModal}>
            <OrderConfirmation onConfirm={handleCloseModal} />
        </Modal>

        <div className='flex flex-col gap-8 text-right max-sm:mb-8'>
            {Object.entries(filteredCart).map(([key, value]) => (
                <div key={key}>
                    <p className='font-bold'>{
                        (CATEGORIES.find((category) => category.value === key)).name
                    }</p>

                    {value.map((val, index) =>
                        <li key={index} className='text-right' dir="rtl">{val.item}</li>
                    )}
                </div>
            ))}
        </div>

        <div className="p-6 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800 ">
            <form onSubmit={handleSubmit} className="flex flex-row-reverse gap-20 max-sm:block max-sm:text-center">
                <Input type="text" name="fullname" placeholder="שם מלא" />
                <Input type="text" name="address" placeholder="כתובת" />
                <Input type="email" name="email" placeholder="דואר אלקטרוני" />
                <Button type="submit">אשר הזמנה</Button>
            </form>
        </div>

    </>);
};