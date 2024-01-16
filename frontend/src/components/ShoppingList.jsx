import { useSelector, useDispatch } from 'react-redux';

import { cartActions } from '../store/cart.js';
import { CATEGORIES } from '../store/cart.js';
import { orderSummaryActions } from '../store/orderSummary.js';
import Input from "./Input";
import Button from "./Button";
import Dropdown from "./Dropdown";

export default function ShoppingList() {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart);

    function handleSubmit(event) {
        event.preventDefault();

        const fd = new FormData(event.target);
        const fields = Object.fromEntries(fd.entries());

        if (fields.item.trim() === '' || fields.category === 'true') {
            console.log("ERR")
        }

        else {
            dispatch(cartActions.addItem({
                item: fields['item'],
                category: fields['category']
            }));
        }

        event.target.reset()
    };

    return (<>
        <div className="max-w-2xl p-6 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800 max-sm:max-w-sm max-sm:p-6 max-sm:mx-0 ">
            <form onSubmit={handleSubmit} className="flex flex-row-reverse gap-20 max-sm:block max-sm:text-center">
                <Input type="text" name="item" placeholder="שם המוצר" />
                <Dropdown options={CATEGORIES} />
                <Button type="submit">הוסף מוצר</Button>
            </form>
        </div>

        <hr className='m-auto border-4 rounded w-11/12 my-4' />

        <div className='text-center'>
            <h2 className='-mt-4 text-3xl font-bold font-mono tracking-widest text-stone-600 max-sm:text-sm'>
                יש לאסוף מוצרים אלו במחלקות המתאימות
            </h2>
        </div>


        <div className='flex flex-row-reverse gap-16 mx-auto max-sm:mx-0 max-sm:text-center max-sm:block max-sm:mb-16'>
            {CATEGORIES.map((category, index) => (
                <div key={index} className=''>

                    <p className='mt-6 font-bold text-xl underline underline-offset-8 hover:text-stone-500'>
                        {category.name} {cart[category.value].length > 0 ? ` - ${cart[category.value].length} מוצרים` : ''}
                    </p>

                    {cart[category.value].map(
                        (product, index) =>
                            <span key={index} className=''>
                                <p className='text-center my-5'>
                                    {product.item} {product.count > 1 ? ' (' + product.count + ') ' : ''}

                                    <button
                                        onClick={() => {
                                            dispatch(cartActions.addItem({
                                                item: product.item,
                                                category: category.value
                                            }));
                                        }}
                                    >+</button>
                                </p>
                            </span>
                    )}
                </div>
            ))}
        </div>

        <div className='m-auto max-sm:text-center max-sm:m-0 max-sm:pb-6'>
            <Button onClick={() => dispatch(orderSummaryActions.onFinishOrder())}>
                סיים הזמנה
            </Button>
        </div>

    </>);
};