import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Pages/Home/Home';
import BranchList from '../Pages/Branch/Branch';
import Login from '../Pages/Login/Login';
import About from '../Pages/About/About';
import NoticeBoard from '../Pages/Notice/NoticeBoard';

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/b',
                element:<BranchList></BranchList>,
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/notice',
                element:<NoticeBoard></NoticeBoard>
            }
        ]
    }
])
export default Router;