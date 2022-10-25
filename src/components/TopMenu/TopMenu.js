//Componentes
import BrandNav from "../BrandNav/BrandNav";
import MenuNav from "../MenuNav/MenuNav";
import Cart from "../Cart/index";

//Css
import { Container, Navbar } from "react-bootstrap";
import "./topMenu.scss";

const TopMenu = (props) => {
  const { productsCart, getProductsCart, products } = props;
  return (
    <Navbar bg="dark" variant="dark" className="top-menu">
      <Container>
        <BrandNav />
        <MenuNav />
        <Cart
          productsCart={productsCart}
          getProductsCart={getProductsCart}
          products={products}
        />
      </Container>
    </Navbar>
  );
};

export default TopMenu;
