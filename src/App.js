import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';
import Routes from './routes';
import AuthProvider from './providers/auth';

const App = () => (
  <Theme>
    <GlobalStyle />
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  </Theme>
);

export default App;
