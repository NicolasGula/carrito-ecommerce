//Componentes
import BrandNav from "../BrandNav/BrandNav";
import MenuNav from "../MenuNav/MenuNav";
import Cart from "../Cart/index";

//Css
import { Container, Navbar } from "react-bootstrap";
import "./topMenu.scss";

const TopMenu = () => {
  return (
    <Navbar bg="dark" variant="dark" className="top-menu">
      <Container>
        <BrandNav />
        <MenuNav />
        <Cart />
      </Container>
    </Navbar>
  );
};

export default TopMenu;
