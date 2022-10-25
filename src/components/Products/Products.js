import "./products.scss";
import { Container, Row } from "react-bootstrap";
import Loading from "../Loading/index";
import Product from "../Product/index";

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
          result.map((product) => (
            <Product product={product} key={product.id} />
          ))
        )}
      </Row>
    </Container>
  );
};

export default Products;
