import React from "react";
import styled from "styled-components";

import CartItem from "./CartItem";
import Button from "../Button";

const Cart = () => {
  return (
    <Wrapper>
      <div>
        <h2>Your Cart</h2>
        <ItemCount>1 Item</ItemCount>
        <CartItem />
      </div>
      <CartFooter>
        <p>Total:</p>
        <Total>$12.34</Total>
        <Button>Purchase</Button>
      </CartFooter>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  height: 100vh;
  padding: 30px;
  background-color: #401f43;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

const ItemCount = styled.p`
  opacity: 0.7;
`;

const CartFooter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  font-size: 1.3em;
`;

const Total = styled.span`
  padding: 10px;
  font-weight: bold;
`;

export default Cart;
