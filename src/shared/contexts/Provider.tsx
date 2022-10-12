// ./src/context/Provider.js
import { useState } from 'react';
import { AppContextInterface } from '../../interfaces/interfaces';
import AppContext from './AppContext';

function Provider({ children }) {
  const [input, setInput] = useState("");

  const contextValue: AppContextInterface = {
    input,
    setInput,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )

  
  
}


export default Provider;


