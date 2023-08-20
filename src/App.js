import React from 'react'
import logo from './logo.svg';
//import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/login/Login';
import { ToastContainer } from 'react-toastify';
import Main from './pages/application/Main';

const router = createBrowserRouter([
  
  {path: '/login',
element: <Login />},
{
  path: "/*",
  element: <Main />
},
]);

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
