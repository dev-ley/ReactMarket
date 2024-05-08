import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import fetchProducts from '../api/fetchProducts';
import ProductCard from './ProductCard';

const ProductsContainer = styled.section`
 background-color: #e4e4e4;
 padding-top: 20px;
 display: flex;
 flex-wrap: wrap;
 justify-content: space-evenly;
 gap: 15px;
 max-width: 1500px;
 margin: 0 auto ;
`;

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetchProducts('iphone').then((response) => {
            setProducts(response);

          });

    }, []);

  return (
    <ProductsContainer>
      { products.map((product) => <ProductCard key={product.id} data={product}/> ) }
     </ProductsContainer>
  )
}

export default Products
