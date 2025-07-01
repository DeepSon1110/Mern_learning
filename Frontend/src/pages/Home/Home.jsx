import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate()

  const handleClick=()=>{
    navigate('/about')
  }

  return (
    <>
    <Header />
    <div className="home-container">
      <h1>Welcome to the Home Page!</h1>
      <p>This is a sample home page for demonstration purposes.</p>
      <button className="home-btn" onClick={handleClick}>Click Me</button>
      <Button name = "sandip" />
    </div>
    </>
  );
}

export default Home;

