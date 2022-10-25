import "./products.scss";
import { Container, Row } from "react-bootstrap";

const Products = (props) => {
  const {
    products: { result, loading, error },
  } = props;

  return (
    <Container>
      <Row>
        {loading || !result
          ? "Cargando..."
          : result.map((product, index) => product.name)}
      </Row>
    </Container>
  );
};

export default Products;
