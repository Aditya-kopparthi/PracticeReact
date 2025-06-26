import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ProductList from '../components/ProductList';

function ProductsPage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center' }}>
      <Header />
      <h2>Our Products</h2>
      <ProductList />
      <br />
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
}

export default ProductsPage;