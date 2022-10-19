import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider } from 'react-query';

import {App} from './App';


import GlobalStyle from './styles/global';
import { UserContextProvider } from './shared/contexts/Provider';
import { queryClient } from './services/queryClient';

ReactDOM.render(
  <React.StrictMode>
  <UserContextProvider>


    <QueryClientProvider client={queryClient}>

    <GlobalStyle/>

    <App />
    </QueryClientProvider>
  </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);