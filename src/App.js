import React from 'react'
import GlobalStyle from './styles/GlobalStyle'
import Theme from './styles/Theme'
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Theme>
  );
}

export default App;
