import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from '../components/Pages/Blog/Blog';
import Home from '../components/Pages/Home/Home';
import Services from '../components/Pages/Services/Services';
import Main from '../Main/Main';

const Router = () => {
    const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>, 
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/services',
                element: <Services/>
            },
            {
                path: '/blog',
                element: <Blog/>
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