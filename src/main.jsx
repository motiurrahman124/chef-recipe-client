import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './Layout/Home';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import AuthProvider from './components/provider/AuthProvider';
import ViewChef from './components/ViewChef/ViewChef';
import PrivateRoute from './routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader: () => fetch(`https://chef-recipe-point-server-motiurcsenubtk-gmailcom.vercel.app/chef`)
      },
      {
        path: "/view-recipe/:id",
        element: <PrivateRoute><ViewChef/></PrivateRoute>,
        loader: ({params}) => fetch(`https://chef-recipe-point-server-motiurcsenubtk-gmailcom.vercel.app/chef/${params.id}`)
      },
      {
        path: "/blog",
        element: <Blog/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/signup",
        element: <Signup/>,
      }
    ]
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
