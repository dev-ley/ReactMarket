import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import fetchProducts from '../api/fetchProducts';
import ProductCard from './ProductCard';
import Loading from './Loading';
import AppContext from '../context/AppContext';

const ProductsContainer = styled.section`
 background-color: #e4e4e4;
 padding: 120px 20px 50px;
 display: flex;
 flex-wrap: wrap;
 justify-content: space-evenly;
 gap: 15px;
 max-width: 1500px;
 margin: 0 auto ;
`;

const Products = () => {

    const { products, setProducts, loading, setLoading} = useContext(AppContext)

    useEffect(() => {

        fetchProducts('iphone').then((response) => {
            setProducts(response);
            setLoading(false);
          });

    }, []);

  return (
    (loading && <Loading /> || (  
      <ProductsContainer>
        { products.map((product) => <ProductCard key={product.id} data={product}/> ) }
      </ProductsContainer>)) 
  
  );
};

export default Products
