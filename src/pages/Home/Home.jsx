import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Mapa from '../../components/Mapa/Mapa';

import './home.css';

const Home = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  useEffect(() => {
    setShowAnimation(true);
  }, []);

  return (
    <div className="home-container">
      <Header />
      <Mapa />
    </div>
  );
};

export default Home;
