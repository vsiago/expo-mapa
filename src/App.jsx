import React, { useEffect, useState } from 'react';
import Home from './pages/Home/Home';
import Intro from './pages/Intro/Intro';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowIntro(false);
    }, 2000);
  }, []);

  return <div>{showIntro ? <Intro /> : <Home />}</div>;
}
