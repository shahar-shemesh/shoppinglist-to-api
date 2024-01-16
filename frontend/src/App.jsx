import { useSelector } from 'react-redux';

import Header from "./components/Header";
import ShoppingList from "./components/ShoppingList";
import TotalItems from "./components/TotalItems";
import OrderSummary from "./components/OrderSummary";

function App() {
  const orderSummaryScreen = useSelector(state => state.orderSummary.openOrderSummaryScreen);

  return (
    <main className="h-screen my-8 flex flex-col gap-8 m-32 md:mb-16 max-sm:block max-sm:m-8">
      <Header />
      <TotalItems />
      {orderSummaryScreen ? <OrderSummary /> : <ShoppingList />}
    </main>
  );
};

export default App;
