import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import fetchProducts from '../api/fetchProducts';
import ProductCard from './ProductCard';

const ProductsContainer = styled.section`

`

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetchProducts('iphone').then((response) => {
            setProducts(response);
            console.log(products)
        });

    }, []);

  return (
    <ProductsContainer>
        <ProductCard />
     </ProductsContainer>
  )
}

export default Products
