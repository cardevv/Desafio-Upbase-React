import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css'
import Home from './components/Home.jsx';
import UserForm from './components/UserForm.jsx';
import DataForm
 from './components/DataForm.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
  path:"/",
  element: <UserForm></UserForm>
},
{
  path:"home",
  element: <Home></Home>
},
{
  path:"dados",
  element: <DataForm></DataForm>
}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
