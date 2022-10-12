// ./src/context/AppContext.js
import { createContext } from 'react';
import { AppContextInterface } from '../../interfaces/interfaces';

const AppContext = createContext<AppContextInterface | null>(null);

export default AppContext;
