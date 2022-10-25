import "./products.scss";
import { Container, Row } from "react-bootstrap";
import Loading from "../Loading/index";
import Product from "../Product/index";

const Products = (props) => {
  const {
    products: { result, loading, error },
    addProductCart,
  } = props;

  return (
    <Container>
      <Row>
        {loading || !result ? (
          <Loading />
        ) : (
          result.map((product) => (
            <Product
              product={product}
              key={product.id}
              addProductCart={addProductCart}
            />
          ))
        )}
      </Row>
    </Container>
  );
};

export default Products;
