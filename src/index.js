import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {AuthContextProvider} from "./components/store/AuthContext"

ReactDOM.render(
  <AuthContextProvider>
  <BrowserRouter ><App /></BrowserRouter>
  </AuthContextProvider>,
  document.getElementById('root')
);