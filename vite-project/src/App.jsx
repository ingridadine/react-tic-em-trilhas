import { AppContextProvider } from './contexts';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

import './App.css'

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Router />          
      </BrowserRouter>
    </AppContextProvider>
  )
};

export { App };
