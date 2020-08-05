import React from "react";
import styled from "styled-components";

const CartItem = () => {
  return (
    <Wrapper>
      <ItemHeader>
        <ItemName>Hello World</ItemName>
        <RemoveBtn>x</RemoveBtn>
      </ItemHeader>
      <Qty>
        Quantity: <QtyInput type="text" />
      </Qty>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 2px dashed #533656;
  margin-top: 40px;
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemName = styled.p`
  padding: 10px;
  font-size: 1.5em;
`;

const RemoveBtn = styled.button`
  color: #fff;
  border: none;
  padding: 10px;
  background: none;
  font-size: 1.5em;
  cursor: pointer;
`;

const Qty = styled.p`
  padding: 10px;
  background-color: #301732;
`;

const QtyInput = styled.input`
  font-size: 1.1em;
  width: 30px;
  padding: 2px 5px;
  color: #fff;
  border: none;
  text-align: center;
  border-bottom: 3px solid #fff;
  background: none;
`;

export default CartItem;
