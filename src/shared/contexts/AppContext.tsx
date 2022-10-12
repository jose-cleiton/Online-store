// ./src/context/AppContext.js
import { createContext } from 'react';
import { Input } from '../../interfaces/interfaces';

const AppContext = createContext<Input | null>(null);

export default AppContext;
