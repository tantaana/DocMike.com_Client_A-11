import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from '../../layout/Main'
import Blogs from '../../Pages/Blogs/Blogs';
import Home from '../../Pages/Home/Home'
import AllService from '../../Pages/Services/AllService/AllService';
import ServiceList from '../../Pages/Services/ServiceList/ServiceList';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/services',
                element: <AllService></AllService>
            }
        ]
    }
])

export default router;