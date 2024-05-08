import styled from "styled-components";

import React from 'react'
import SearchBar from "./SearchBar";
import CartButton from "./CartButton";

const Header = styled.header`
  background-color: #00a5ec;
  width: 100%;
`;

const Container = styled.div`
  max-width: 1500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
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
