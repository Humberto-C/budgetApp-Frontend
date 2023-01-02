import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { DataContextProvider } from './contexts/UserData';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <DataContextProvider>
    <App />
  </DataContextProvider>
  </BrowserRouter>
);
