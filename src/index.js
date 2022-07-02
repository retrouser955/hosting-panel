import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ServerInfo from './routes/ServerInfo';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/server/:id' element={<ServerInfo />} />
    </Routes>
  </BrowserRouter>
);