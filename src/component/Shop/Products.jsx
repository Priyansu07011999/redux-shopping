import ProductItem from './ProductItem';

const Products = (props) => {
  const products = [
    { id: 'p1', title: 'Test', price: 6, description: 'This is a first product - amazing!' },
  ];

  return (
    <section className="bg-gray-800 py-8">
      <h2 className="text-white my-8 text-center uppercase">Buy your favorite products</h2>
      <ul className="list-none p-0 m-0">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
