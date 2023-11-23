import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root/Root';
import Home from './Pages/Home/Home';
import Contact from './Pages/Conatact us/Contact';
import About from './Pages/About/About';
import Biodata from './Pages/Biodatas/Biodata';
import AuthProvider from './Providers/AuthProvider';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import BiodataDetail from './Pages/Biodatas/BiodataDetail';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'biodata',
        element: <Biodata></Biodata>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'all/:biodata_id',
        element: <BiodataDetail></BiodataDetail>,
        loader: () => fetch('http://localhost:5000/all')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
