import { useSelector } from 'react-redux';
import CartItem from './CartItem'; // Ensure that the correct path to CartItem is provided


const Cart = (props) => {
  const isVisible = useSelector((state) => state.cart.isVisible);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="max-w-2xl bg-gray-800 text-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl mb-2">Your Shopping Cart</h2>
      <ul className="list-none p-0 m-0">
        <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        />
      </ul>
    </div>
  );
};

export default Cart;
