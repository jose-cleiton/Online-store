// ./src/context/AppContext.js
import { createContext } from 'react';
import {UserContextType } from '../../interfaces/interfaces';
import { initialState } from '../../services/initialStates';



 export const UseContext = createContext<UserContextType>(initialState);



 


