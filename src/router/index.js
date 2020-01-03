import Home from '../views/home'
import About from "../views/about";
import About1 from "../views/about1";
import Notfound from "../views/notfound";
import Category from "../views/category";
const routers = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/about',
        component: About,
        exact: true
    },
    {
        path:['/c/:category','/c/:category/:subcate','/c/:category/:subcate/:name'],
        component:Category,
        exact: true
    },
    // {
    //     path:'/c/:category/:name',
    //     component:Category,
    //     exact: true
    // },
    {
        path: '/about/:id',
        component: About1
    },
    {
    path:'*',
        component:Notfound
    }
]
export default routers