import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

function ContactPage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center' }}>
      <Header />
      <h2>Contact Us</h2>
      <ContactForm />
      <br />
      <button onClick={() => navigate('/')}>Back to Home</button>
      <Footer />
    </div>
  );
}

export default ContactPage;