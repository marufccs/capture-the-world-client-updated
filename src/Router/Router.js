import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddServices from '../components/Pages/AddServices/AddServices';
import Blog from '../components/Pages/Blog/Blog';
import ContactUs from '../components/Pages/ContactUs/ContactUs';
import ErrorPage from '../components/Pages/ErrorPage/ErrorPage';
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
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                loader: () => fetch ('https://capture-the-world-server.vercel.app/services'),
                element: <Home/>
            },
            {
                path: '/services',
                loader: () => fetch('https://capture-the-world-server.vercel.app/allServices'),
                element: <Services/>
            },
            {
                path: '/services/:id',
                loader: ({params}) =>
                    fetch(`https://capture-the-world-server.vercel.app/allServices/${params.id}`),
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
                path: '/contactus',
                element:<ContactUs></ContactUs>
            }, 
            {
                path: '/myreviews/:email',
                loader: ({params}) => fetch(`https://capture-the-world-server.vercel.app/reviews?email=${params.email}`),
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