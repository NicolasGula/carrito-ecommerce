//Componentes
import TopMenu from "./components/TopMenu";
import Products from "./components/Products";
import useFetch from "./hooks/useFetch";
import { STORAGE_PRODUCT_CART } from "./utils/constants";

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

    console.log("producto anadidio");
  };

  return (
    <div className="App">
      <TopMenu />
      <Products products={products} addProductCart={addProductCart} />
    </div>
  );
}

export default App;
