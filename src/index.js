import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Nav from './Nav';
import Sports from './Sports';
import Mahabhrat from './Mahabhrat';
// import Friendship from './Friendship';
import God from './God';
import Login from './Login';
import Comedy from './Comedy';
import Kids from './Kids' ;
import Avengers from './Avengers';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> 
     <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Sports" element={<Sports />} />
        <Route path="/Mahabhrat" element={<Mahabhrat />} />
        <Route path="/God" element={<God />} />
        <Route path="/Comedy" element={<Comedy />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/Avengers" element={< Avengers/>} />
      </Routes>
    </Router> 
  </React.StrictMode>
)

reportWebVitals();
