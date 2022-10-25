//Componentes
import BrandNav from "../BrandNav/BrandNav";
import MenuNav from "../MenuNav/MenuNav";

//Css
import { Container, Navbar } from "react-bootstrap";
import "./topMenu.scss";

const TopMenu = () => {
  return (
    <Navbar bg="dark" variant="dark" className="top-menu">
      <Container>
        <BrandNav />
        <MenuNav />
        {/* Carrito */}
      </Container>
    </Navbar>
  );
};

export default TopMenu;
