import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import CartItem from "./CartItem";
import Button from "../Button";
import { getStoreItemArray } from "../../reducers";

const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);
};

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);
  let totalPrice = 0;

  return (
    <Wrapper>
      <CartItems>
        <h2>Your Cart</h2>
        <ItemCount>{storeItems.length} Items</ItemCount>
        {storeItems.map((item) => {
          totalPrice += item.quantity * item.price;
          return (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
            />
          );
        })}
      </CartItems>
      <CartFooter>
        <p>Total:</p>
        <Total>{formatPrice(totalPrice)}</Total>
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

const CartItems = styled.div`
  overflow-y: auto;
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
