import React from 'react';
import GlobalStyle from './styles/global';
import Routes from './routes'
import { Provider } from 'react-redux'
import store from './store'


function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Routes />
      </Provider> 
    </>
  );
}

export default App;
