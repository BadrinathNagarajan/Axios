
import Home from "../components/Home"
import Dashboard from "../components/Dashboard"
import Create from "../components/Create"
import { Navigate } from "react-router-dom"

const AppRoutes = [
{
    path:'/',
    element:<Home/>
},
{
    path:'/dashboard',
    element:<Dashboard/>
},
{
    path:'/create',
    element:<Create/>
},
{
    path:'/edit/:id',
    element:<Create/>
},
{
    path:'*',
    element:<Navigate to = '/'/>
}
]

export default AppRoutes