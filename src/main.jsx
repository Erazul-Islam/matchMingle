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
import Checkgout from './Pages/Biodatas/Checkgout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Dashboard from './Components/DashBoard/Dashboard';
import DashboardCart from './Components/DashBoard/DashboardCart';
import MyContact from './Components/DashBoard/MyContact';
import MyFavourite from './Components/DashBoard/MyFavourite';
import Edit from './Components/DashBoard/Edit';
import Admin from './Components/AdminDashboard/Admin';
import Manage from './Components/AdminDashboard/Manage';
import Approve from './Components/AdminDashboard/Approve';
import ApproveContact from './Components/AdminDashboard/ApproveContact';

const queryClient = new QueryClient();



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
        element: <Biodata></Biodata>,
        loader: () => fetch('http://localhost:5000/all')
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
        path: 'all/:_id',
        element: <PrivateRoute><BiodataDetail></BiodataDetail></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/all')
      },
      {
        path: 'all/:biodata_id',
        element: <Checkgout></Checkgout>,
        loader: () => fetch('http://localhost:5000/all')
      }
    ]
  },
  {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'cart',
          element: <DashboardCart></DashboardCart>,
          loader: () => fetch('http://localhost:5000/add')
        },
        {
          path: 'mycontact',
          element: <MyContact></MyContact>
        },
        {
          path: 'favourites',
          element: <MyFavourite></MyFavourite>,
          loader: () => fetch('http://localhost:5000/fav')
        },
        {
          path: 'edit',
          element: <PrivateRoute><Edit></Edit></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/add/${params._id}`)
        },
        {
          path: 'admin',
          element: <Admin></Admin>
        },
        {
          path: 'manage',
          element: <Manage></Manage>
        },
        {
          path: 'premeium',
          element: <Approve></Approve>,
          
        },
        {
          path: 'contact',
          element: <ApproveContact></ApproveContact>
        }
      ]
  }
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>

  </React.StrictMode>,
)
