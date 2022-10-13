// ./src/context/AppContext.js
import { createContext } from 'react';
import { initialState, UserContextType } from '../../interfaces/interfaces';



 export const UseContext = createContext<UserContextType>(initialState);



 


