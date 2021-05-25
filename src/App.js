import React from 'react'
import GlobalStyle from './styles/GlobalStyle'
import Theme from './styles/Theme'
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'
import AuthProvider from './providers/auth'


const App = () => {
  return (

    <Theme>
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>
    </Theme>



  );
}

export default App;
