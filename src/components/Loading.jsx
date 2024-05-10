import React from 'react'
import { BiLoaderAlt } from "react-icons/bi";
import styled from 'styled-components';

const IconLoading = styled(BiLoaderAlt)`
    font-size: 2rem;
    margin: 200px auto 0;
    animation: spin 1s linear infinite;
    width: 100%;

    @keyframes spin {
        from { 
            transform: rotate(0deg);
        }
        to {
            transform: rotate(260deg);
        }
    }
`;


const Loading = () => {
  return (
    <div>
      <IconLoading />
    </div>
  )
}

export default Loading
