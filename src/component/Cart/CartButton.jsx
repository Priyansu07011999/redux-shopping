import { useDispatch } from 'react-redux';
import { toggle } from '../../cartSlice';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(toggle());
  };

  return (
    <button
      onClick={toggleCartHandler}
      className="bg-transparent border border-teal-400 text-teal-400 hover:text-white active:text-white flex items-center"
    >
      <span className="mx-2">My Cart</span>
      <span className="bg-teal-400 rounded-full px-5 py-1 text-gray-900">1</span>
    </button>
  );
};

export default CartButton;
