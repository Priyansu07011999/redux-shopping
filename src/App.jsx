import Cart from './component/Cart/Cart';
import Layout from './component/Layout/Layout';
import Products from './component/Shop/Products';

function App() {
  return (
    <Layout>
      <div className="bg-gray-900 min-h-screen text-gray-200">
        <div className="container mx-auto p-4">
          <Cart />
          <Products />
        </div>
      </div>
    </Layout>
  );
}

export default App;
