// ./src/context/Provider.js

import { useState } from "react";
import { initialState, UserContextProps } from "../../interfaces/interfaces";
import { UseContext } from "./AppContext";


export const UserContextProvider = ({ children }:UserContextProps) => {
 
  const [info, setInfo] = useState(initialState.info);

  return (
    <UseContext.Provider value={
      { 
        
        info,
        setInfo
      }}>
      {children}
    </UseContext.Provider>
  );
}


