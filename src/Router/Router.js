import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddServices from '../components/Pages/AddServices/AddServices';
import Blog from '../components/Pages/Blog/Blog';
import Home from '../components/Pages/Home/Home';
import MyReviews from '../components/Pages/MyReviews/MyReviews';
import ServiceDetails from '../components/Pages/Services/ServiceDetails';
import Services from '../components/Pages/Services/Services';
import SignIn from '../components/Pages/SignIn/SignIn';
import SignUp from '../components/Pages/SignUp/SignUp';
import Main from '../Main/Main';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const Router = () => {
    const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>, 
        children: [
            {
                path: '/',
                loader: () => fetch ('http://localhost:5000/services'),
                element: <Home/>
            },
            {
                path: '/services',
                loader: () => fetch('http://localhost:5000/allServices'),
                element: <Services/>
            },
            {
                path: '/services/:id',
                loader: ({params}) =>
                    fetch(`http://localhost:5000/allServices/${params.id}`),
                element: <ServiceDetails/>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/signin',
                element: <SignIn/>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute>
                <MyReviews></MyReviews>
                </PrivateRoute>

            },
            {
                path: '/addservices',
                element: <PrivateRoute>
                <AddServices></AddServices>
                </PrivateRoute>
            },
        ]
    }
])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Router;