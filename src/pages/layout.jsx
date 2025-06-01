import React from 'react';
import MenuNav from '../components/menu';
import { Button, Card } from 'antd';
import AdCarousel from '../components/adcasual';
import { Outlet, useNavigate } from 'react-router-dom';
import { LoginOutlined } from '@ant-design/icons';

const Layout = () => {
 const nav=useNavigate();
    return (
        <div className='w-screen h-screen  flex flex-col' >
            <div className='h-12 w-full bg-[#f2f2f2] flex justify-between items-center '>
                <div className='w-[120px] text-3xl font-black text-center cursor-pointer  ' onClick={()=>nav("home")}>
                EzBuy
                </div>
                <MenuNav />
                <div className='w-[80px] text-center cursor-pointer' onClick={()=>nav("/")}>

                <LoginOutlined />
                Login
                </div>
            </div>
            {/** mianconetnet*/}
            <div className='flex-1 flex '>
          <Outlet/>
            </div>  
        </div>
    );
}

export default Layout;
