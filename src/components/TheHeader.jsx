import styled from "styled-components";

import React from 'react'
import SearchBar from "./SearchBar";
import CartButton from "./CartButton";

const Header = styled.header`
  background-color: yellow;
  width: 100%;
`;

const Container = styled.div`
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;


const TheHeader = () => {
  return (
    <Header>
      <Container>
        <SearchBar />
        <CartButton />
      </Container>
    </Header>
  )
}

export default TheHeader
