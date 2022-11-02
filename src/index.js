import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'theme-ui';
import theme from './theme/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {AuthProvider} from './context/AuthProvider';
import { ModalProvider } from './context/ModalProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> 
      <BrowserRouter>
        <AuthProvider>
          <ModalProvider>
            <Routes>
              <Route path='/*' element={<App />} />
            </Routes>
          </ModalProvider>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
