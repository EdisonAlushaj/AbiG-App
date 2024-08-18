import React, { Component, Suspense } from 'react';
import { BrowserRouter, Outlet } from 'react-router-dom';
import './App.css'
import Header from './Header/Header.jsx';
import AppRoutes from './AppRoutes.jsx';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  )
}

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <AppRoutes />
          </Suspense>
        </BrowserRouter>
      </div>
    );
  }
}

export default App
