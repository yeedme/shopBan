import { Children, Suspense } from "react";
import {
    BrowserRouter  ,
    useNavigate,
    useRoutes,
} from "react-router-dom";
import Layout from "../pages/layout";
import Login from "../pages/login";
import ShopCard from "../pages/shopCard";
import Outside from "../pages/outside";
import { Spin } from "antd";
import Home from "../pages/home";
import Order from "../pages/order";

const pages = [
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/all',
        element: <Layout />,
        children: [
            {
                path: 'shop',
                element: <ShopCard />
            },
            {
                path: 'outside',
                element: <Outside />
            },     {
                path: 'home',
                element: <Home />
            },{
                path:"order",
                element:<Order/>
            }
        ]
    },{
        path: '*',
        element: <>404</>
    }
    
]
function LazyRouterElement() {
    const element = useRoutes(pages);
    return (<>
         <Suspense fallback={<Spin />}>
            {element}
        </Suspense>
     
    </>)
}
export default LazyRouterElement;