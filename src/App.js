import React, { useEffect, useRef } from 'react';
import { BsArrowUp } from 'react-icons/bs';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Contact from './layouts/Contact';
import States from './lib/stateContext';
import { up } from './helpers/Animation';
const App = () => {
  const elevator = () => {
    window.scroll(0, 0);
  };
  let arrow = useRef(null);
  useEffect(() => {
    window.scroll(0, 0);
    up([arrow]);
  }, []);
  return (
    <>
      <States>
        <Router>
          <Header />
          <Routes />
          <div ref={(el) => (arrow = el)} onClick={elevator} className="up">
            <BsArrowUp />
          </div>
          <Contact />
        </Router>
      </States>
    </>
  );
};
export default App;
