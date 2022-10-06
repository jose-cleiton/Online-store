import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider } from 'react-query';

import {App} from './App';
import { queryClient } from './shared/services/queryClient';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

    <GlobalStyle/>

    <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);