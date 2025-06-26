import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center' }}>
      <Header />
      <HeroBanner />
      <button onClick={() => navigate('/products')}>Shop Now</button>
      <br /><br />
      <button onClick={() => navigate('/contact')}>Contact Us</button>
    </div>
  );
}

export default HomePage;