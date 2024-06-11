import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';


const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <GoogleOAuthProvider clientId="1089696147349-bgbd538sqkqe01c8dnmff2eqbc351vcs.apps.googleusercontent.com"
  >
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>
);