import Home  from './../pages/home'
import Dashbord  from './../pages/dashbord'
import Login  from './../pages/login'
import Register  from './../pages/register'

const routes = [
    {
        path: '/',
        exact: true,
        auth: false,
        component: Home,
    },
    {
        path: '/login',
        exact: true,
        auth: false,
        component: Login,
    },
    {
        path: '/register',
        exact: true,
        auth: false,
        component: Register,
    },
    {
        path: '/dashbord',
        exact: true,
        auth: true,
        component: Dashbord,
    }
]

export default routes;