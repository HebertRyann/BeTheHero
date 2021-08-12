import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './global.css';
import { AuthProvider } from './hooks/Auth';
import Routes from './routes';


function App() {
  
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
