import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Button from '../../components/Button';

function Home() {
  return (
    <>
    <Header />
    <div className="home-container">
      <h1>Welcome to the Home Page!</h1>
      <p>This is a sample home page for demonstration purposes.</p>
      <button className="home-btn">Click Me</button>
      <Button name = "sandip" />
    </div>
    </>
  );
}

export default Home;

