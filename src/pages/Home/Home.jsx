import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import './home.css';

const Home = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  useEffect(() => {
    setShowAnimation(true);
  }, []);

  return (
    <div className="home-container">
      <Header />
    </div>
  );
};

export default Home;
