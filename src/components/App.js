import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import ItemGrid from "./ItemGrid";
import Cart from "./Cart";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <Wrapper>
      <div>
        <Header>
          <Logo />
        </Header>
        <ItemGridWrapper>
          <ItemGrid />
        </ItemGridWrapper>
      </div>
      <CartWrapper>
        <Cart />
      </CartWrapper>
      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  position: relative;
`;

const Header = styled.header`
  /* grid-area: header; */
  grid-area: 1 / 1 / 2 / 2;
  padding: 32px 64px;
`;

const ItemGridWrapper = styled.main`
  /* grid-area: main; */
  padding: 16px 64px;
`;

const CartWrapper = styled.div`
  /* grid-area: sidebar; */
  grid-area: 1 / 2 / 2 / 3;
  border-left: 3px dashed #ff406e;
  padding-left: 8px;
`;

export default App;
