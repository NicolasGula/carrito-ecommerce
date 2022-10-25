//Componentes
import TopMenu from "./components/TopMenu";
import Products from "./components/Products";
import useFetch from "./hooks/useFetch";

import { urlApiProducts } from "./utils/constants";

function App() {
  const products = useFetch(urlApiProducts, null);

  return (
    <div className="App">
      <TopMenu />
      <Products products={products} />
    </div>
  );
}

export default App;
