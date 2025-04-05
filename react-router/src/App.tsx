import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'; 
import { Routes } from 'react-router-dom';
import Login from './components/login/Login';
import NotFoundPage from './components/404-page/NotFoundPage';
import Layout from './components/layout/Layout';
import Dashboard from './components/layout/Dashboard';
import AboutMe from './components/layout/AboutMe';
import Contact from './components/layout/Contact';
import AuthGuardWrapper from './Authentication/AuthGuardWrapper';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route element={<Login />} path='/'></Route>

    <Route path='/dashboard' 
    element={
    <AuthGuardWrapper>
      <Layout />
      </AuthGuardWrapper>}>
    <Route path='/dashboard' element={<Dashboard />}></Route>
    <Route path='/dashboard/about' element={<AboutMe />}></Route>
    <Route path='/dashboard/contact' element={<Contact />}></Route>
    </Route>

    <Route path='*' element={<NotFoundPage />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
