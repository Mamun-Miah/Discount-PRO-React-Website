import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthContex from './AuthContex';
import Root from './Root';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Login from './components/Login';
import Register from './components/Register';
import ForgetPassword from './components/ForgetPassword';
import Brands from './components/Brands';
import CouponPage from './components/CouponPage';
import PrivateRoute from './components/private-route/PrivateRoute';
import MyProfile from './components/MyProfile';
import UpdateProfile from './components/UpdateProfile';

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
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/forgot-password',
        element: <ForgetPassword></ForgetPassword>
      },
      {
        path: '/brands',
        element: <Brands></Brands>
      },
      {
        path: '/brand/:id',
        element: <PrivateRoute><CouponPage></CouponPage></PrivateRoute>
      },
      {
        path:"/my-profile",
        element:
              <PrivateRoute>
                <MyProfile />
              </PrivateRoute>
      },
      {
        path: '/update-profile',
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        ,
      },

    ],

  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  }


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContex>
      <RouterProvider router={router} />
    </AuthContex>

  </StrictMode>,
)
