import { useState } from "react";
import { Button } from "react-bootstrap";
import "./cart.scss";
import { ReactComponent as CartEmpty } from "../../assets/svg/cart-empty.svg";

const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const widthCartContent = cartOpen ? 400 : 0;

  const openCart = () => {
    setCartOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeCart = () => {
    setCartOpen(false);
    document.body.style.overflow = "scroll";
  };

  return (
    <>
      <Button variant="link" className="cart">
        <CartEmpty onClick={openCart} />
      </Button>
      <div className="cart-content" style={{ width: widthCartContent }}>
        Todos mis productos..
      </div>
    </>
  );
};

export default Cart;
