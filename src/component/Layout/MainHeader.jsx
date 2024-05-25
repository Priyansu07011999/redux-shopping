import CartButton from '../Cart/CartButton';

const MainHeader = (props) => {
  return (
    <header className="w-full h-20 px-10 flex items-center justify-between bg-gray-800">
      <h1 className="text-white">ReduxCart</h1>
      <nav>
        <ul className="list-none m-0 p-0 flex">
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
