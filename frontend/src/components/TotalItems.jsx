import { useSelector } from 'react-redux';

export default function TotalItems() {
    const totalItems = useSelector(state => state.cart.totalItemsInCart);

    return (
        <div className='ml-12 text-blue-600 max-sm:mb-16 max-sm:w-full'>
            סה"כ: <span className='font-bold'>{totalItems}</span> מוצרים בעגלה
        </div>
    );
};