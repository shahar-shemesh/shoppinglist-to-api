import { useSelector } from 'react-redux';

export default function Header() {
    const orderSummaryScreen = useSelector(state => state.orderSummary.openOrderSummaryScreen);
    let title = orderSummaryScreen ? 'סיכום הזמנה' : 'רשימת קניות';

    return <header className="mx-auto sm:m-auto">
        <h1 className="font-bold text-center text-5xl mb-8">{title}</h1>
    </header>;
}