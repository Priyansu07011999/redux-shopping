import { useDispatch } from 'react-redux';
import { addItem } from '../../cartSlice';
import Card from '../UI/Card'

const ProductItem = (props) => {
  const { id, title, price, description } = props;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addItem({ id, title, price }));
  };

  return (
    <li className="my-4">
      <Card>
        <header className="flex justify-between items-baseline">
          <h3 className="my-2 text-xl">{title}</h3>
          <div className="rounded-full px-6 py-1 bg-gray-700 text-white text-lg">
            ${price.toFixed(2)}
          </div>
        </header>
        <p className="text-gray-700">{description}</p>
        <div className="flex justify-end mt-2">
          <button onClick={addToCartHandler} className="bg-transparent border border-gray-700 text-gray-700 px-4 py-1 rounded hover:bg-gray-600 hover:text-white">
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
