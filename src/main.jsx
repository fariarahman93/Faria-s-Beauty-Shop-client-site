import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './MainLayout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import AddProduct from './components/AddProduct/AddProduct.jsx';
import MyCart from './components/MyCart/MyCart.jsx';


import BrandProductCard from './components/BrandProductCard/BrandProductCard.jsx';

import NotFound from './components/NotFound/NotFound.jsx';
import SingleProduct from './components/SingleProduct/SingleProduct.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import AuthProvider from './components/providers/AuthProvider.jsx';
import PrivateRoute from './components/providers/PrivateRoute/PrivateRoute.jsx';
import UpdateProduct from './components/UpdateProduct/UpdateProduct.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout> ,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () =>fetch('https://cosmetics-server-site-by-faria-15ni10ce5.vercel.app/brands')
        
      },
      {
        path:'/addProduct',
        element:<AddProduct></AddProduct>
      },
     
      {
        path:'/brands/:brandId/products',
        element:<BrandProductCard></BrandProductCard>,
        loader: ({params}) => fetch(`https://cosmetics-server-site-by-faria-15ni10ce5.vercel.app/brands/${params.brandId}/products`)
      },
      {
        path:'/myCart',
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
      },
     
      {
        path:'/products/:productId',
        element:<PrivateRoute><SingleProduct></SingleProduct></PrivateRoute>,
        loader: ({params}) => fetch(`https://cosmetics-server-site-by-faria-15ni10ce5.vercel.app/products/${params.productId}`)
      },
      {
         path:'/updateProduct/:id',
         element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
         loader: ({params}) => fetch(`https://cosmetics-server-site-by-faria-15ni10ce5.vercel.app/products/${params.id}`)
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ], 
  },
  {
    path: "*",
    element: <NotFound></NotFound>
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
