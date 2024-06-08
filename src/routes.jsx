import { createBrowserRouter } from 'react-router-dom'

import Register from './pages/Register'
import Users from './pages/Users'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Users /> 
    },

    {
        path: "/register",
        element: <Register /> 
    }
])