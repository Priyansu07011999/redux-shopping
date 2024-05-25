const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;

  return (
    <li className="my-4 bg-gray-700 p-4 rounded">
      <header className="flex justify-between items-baseline">
        <h3 className="mb-2 text-xl">{title}</h3>
        <div className="text-lg font-bold">
          ${total.toFixed(2)}{' '}
          <span className="font-normal text-base italic">(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">
          x <span className="text-lg font-bold">{quantity}</span>
        </div>
        <div className="flex justify-end mt-2">
          <button className="bg-transparent border border-white ml-2 px-4 py-1 text-white hover:bg-gray-600">
            -
          </button>
          <button className="bg-transparent border border-white ml-2 px-4 py-1 text-white hover:bg-gray-600">
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
