//Componentes
import TopMenu from "./components/TopMenu";
import Products from "./components/Products";
import useFetch from "./hooks/useFetch";
import { STORAGE_PRODUCT_CART } from "./utils/constants";
import { ToastContainer, Toast, toast } from "react-toastify";

import { urlApiProducts } from "./utils/constants";
import { useState } from "react";

function App() {
  const [productsCart, setProductsCart] = useState([]);
  const products = useFetch(urlApiProducts, null);

  const addProductCart = (id, name) => {
    const idsProducts = productsCart;
    idsProducts.push(id);
    setProductsCart(idsProducts);
    localStorage.setItem(STORAGE_PRODUCT_CART, productsCart);

    toast.success(`${name} añadido al carrito correctamente`);
  };

  return (
    <div className="App">
      <TopMenu />
      <Products products={products} addProductCart={addProductCart} />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange={false}
        draggable
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;
