import { lazy,Suspense} from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'; 
import { Routes } from 'react-router-dom';

//without lazy loding direct import ----------->
// import Login from './components/login/Login';
// import NotFoundPage from './components/404-page/NotFoundPage';
// import Layout from './components/layout/Layout';
// import Dashboard from './components/layout/Dashboard';
// import AboutMe from './components/layout/AboutMe';
// import Contact from './components/layout/Contact';

// use this for lazy loading --------------------->
const Login=lazy(()=> import('./components/login/Login'));
const NotFoundPage=lazy(()=> import('./components/404-page/NotFoundPage'));
const Layout=lazy(()=> import('./components/layout/Layout'));
const Dashboard = lazy(()=> import('./components/layout/Dashboard'));
const AboutMe = lazy(()=> import('./components/layout/AboutMe'));
const Contact = lazy(()=> import('./components/layout/Contact'));

import AuthGuardWrapper from './Authentication/AuthGuardWrapper';

function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<h1>Loading....</h1>}>
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
    </Suspense>
    </BrowserRouter>
  )
}

export default App
