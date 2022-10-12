import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider } from 'react-query';

import {App} from './App';
import Provider from './shared/contexts/Provider';
import { queryClient } from './shared/services/queryClient';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <React.StrictMode>
  <Provider>


    <QueryClientProvider client={queryClient}>

    <GlobalStyle/>

    <App />
    </QueryClientProvider>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);