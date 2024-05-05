import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import styled from 'styled-components';

const FormSearch = styled.form`
    display: flex;
    background-color: #fff;
    width: 100%;
    max-width: 500px;
    justify-content: space-between;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    gap: 13px;
    padding-right: 13px;
`;

const SearchInput = styled.input`
    padding: 13px;
    flex-grow: 1;
    border: none;
    outline: none;
    font-size: 0.8rem;
    border-right: 1px solid #ddd
`;

const SearchButton = styled.button`
    background:none;
    border: none;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
`;


const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('')
  return (
        <FormSearch>
            <SearchInput 
            type="search"
            placeholder="Buscar Produtos"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            required
            />

            <SearchButton 
            type="submit"
            ><IoSearchSharp />
            </SearchButton>
        </FormSearch>
  )
}

export default SearchBar;
