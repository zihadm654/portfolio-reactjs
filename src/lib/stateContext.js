import { createContext, useState } from 'react';

export const stateContext = createContext();

const States = (props) => {
  const [menu, setMenu] = useState(true);
  return (
    <stateContext.Provider value={{ menu, setMenu }}>
      {props.children}
    </stateContext.Provider>
  );
};

export default States;
