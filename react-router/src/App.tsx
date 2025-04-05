import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'; 
import { Routes } from 'react-router-dom';
import Login from './components/login/Login';
import NotFoundPage from './components/404-page/NotFoundPage';
import Layout from './components/layout/Layout';
import Dashboard from './components/layout/Dashboard';
import AboutMe from './components/layout/AboutMe';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route element={<Login />} path='/'></Route>
    <Route path='/dashboard' element={<Layout />}>
    <Route path='/dashboard' element={<Dashboard />}></Route>
    <Route path='/dashboard/about' element={<AboutMe />}></Route>
    </Route>
    <Route path='*' element={<NotFoundPage />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
