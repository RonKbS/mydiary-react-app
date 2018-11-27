
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes/index';
import store from './store';
import './App.css';
import Footer from './components/landingPage/Footer';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <Routes />
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  </Provider>
);

export default App;
