import React from 'react'
//import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Main from './pages/application/Main';

const router = createBrowserRouter([
  
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
