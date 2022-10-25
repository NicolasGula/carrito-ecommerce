import "./products.scss";
import { Container, Row } from "react-bootstrap";
import Loading from "../Loading/index";

const Products = (props) => {
  const {
    products: { result, loading, error },
  } = props;

  return (
    <Container>
      <Row>
        {loading || !result ? (
          <Loading />
        ) : (
          result.map((product, index) => product.name)
        )}
      </Row>
    </Container>
  );
};

export default Products;
