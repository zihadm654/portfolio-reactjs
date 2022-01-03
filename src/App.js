import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
// import Loader from './components/Loader';
import Header from './components/Header';
import Contact from './layouts/Contact';
import States from './lib/stateContext';
const App = () => {
  return (
    <>
      <States>
        <Router>
          {/* <Loader /> */}
          <Header />
          <Routes />
          <Contact />
        </Router>
      </States>
    </>
  );
};
export default App;
