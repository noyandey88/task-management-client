import React from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Router/Router';

function App() {
  return (
    <div className="dark:bg-dark font-grotesk">
      <div className="max-w-7xl mx-auto">
        <RouterProvider router={router} />
        <Toaster />
      </div>
    </div>
  );
}

export default App;
