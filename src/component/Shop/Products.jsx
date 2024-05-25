import ProductItem from './ProductItem';

const Products = (props) => {
  return (
    <section className="bg-gray-800 py-8">
      <h2 className="text-white my-8 text-center uppercase">Buy your favorite products</h2>
      <ul className="list-none p-0 m-0">
        <ProductItem
          title="Test"
          price={6}
          description="This is a first product - amazing!"
        />
      </ul>
    </section>
  );
};

export default Products;
