import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from "@asgardeo/auth-react";

const authConfig = {
  signInRedirectURL: "http://localhost:3000/home",
  signOutRedirectURL: "http://localhost:3000/",
  clientID: "tEnYxGtR19OCtgmdEWp7DgL87fEa",
  baseUrl: "https://api.asgardeo.io/t/hasinisama",
  scope: ["openid", "profile"],
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider config={authConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
