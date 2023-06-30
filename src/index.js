import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import almacenamiento from './store/store';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={almacenamiento}>
      <BrowserRouter>

        <App />

      </BrowserRouter>


    </Provider>
  </React.StrictMode>
);



