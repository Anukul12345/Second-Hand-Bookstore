import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <h1>Welcome to BookBazaar</h1>
        <p>Your trusted platform to buy and sell second-hand books.</p>
      </div>
    </>
  );
};

export default Home;