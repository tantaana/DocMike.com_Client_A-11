import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from '../../layout/Main'
import Blogs from '../../Pages/Blogs/Blogs';
import Home from '../../Pages/Home/Home'
import Login from '../../Pages/Login/Login';
import AllService from '../../Pages/Services/AllService/AllService';
import ServiceDetails from '../../Pages/Services/ServiceDetails/ServiceDetails';
import ServiceList from '../../Pages/Services/ServiceList/ServiceList';
import SignUp from '../../Pages/SignUp/SignUp';
import UserReview from '../../Pages/UserReview/UserReview';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';

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
            },
            {
                path: '/services/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/servicesAll/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/review',
                element: <UserReview></UserReview>
            }
        ]
    }
])

export default router;