import { Nav } from "react-bootstrap";

const MenuNav = () => {
  return (
    <Nav className="mr-auto">
      <Nav.Link href="#">Aperitivos</Nav.Link>
      <Nav.Link href="#">Helados</Nav.Link>
      <Nav.Link href="#">Postres</Nav.Link>
    </Nav>
  );
};

export default MenuNav;
