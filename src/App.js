import Routes from './Routes';
import React from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
import Contact from './layouts/Contact';

const App = () => {
  return (
    <>
      <Loader />
      <Header />
      <Routes />
      <Contact />
    </>
  );
};
export default App;
