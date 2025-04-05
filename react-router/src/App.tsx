import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'; 
import { Routes } from 'react-router-dom';
import Login from './components/login/Login';
import NotFoundPage from './components/404-page/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route element={<Login />} path='/'></Route>
    <Route path='*' element={<NotFoundPage />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
