import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const isVisible = useSelector((state) => state.cart.isVisible);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="max-w-2xl bg-gray-800 text-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl mb-2">Your Shopping Cart</h2>
      <ul className="list-none p-0 m-0">
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              quantity: item.quantity,
              total: item.total,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
