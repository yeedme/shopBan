import { Menu } from 'antd';
import React, { useState } from 'react';
import { AppstoreOutlined, BorderOutlined, MailOutlined, RobotOutlined, SettingOutlined, ShopOutlined, ShoppingCartOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Navigate, useNavigate } from 'react-router-dom';


  
const MenuNav = () => {
    const [current, setCurrent] = useState('mail');
    const navigate = useNavigate();
    const items= [
      {
        label: 'AI Recommend',
        key: 'ai',
        icon:<RobotOutlined />,
      },
      // {
      //   label: 'Purchasing Service',
      //   key: 'purchasing',
      //   icon: <ShoppingOutlined />,
      // },
      {
        label: 'EzBuy-shop',
        key: 'shop',
        icon: <ShopOutlined />,
      },
       {
            label: 'My Order',
            key: 'order',
            icon: <ShoppingCartOutlined />,
        },
   
    ];
    const onClick= (e) => {
      if(e.key==='ai'){
        
      }else {

        navigate(e.key)
      }
      // setCurrent(e.key);
    };
    return (
      <>
  
      <div className='w-[400px] '>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{
          backgroundColor:'#f2f2f2',
          color:"white"
        }} />

      </div>

      </>
    );
}

export default MenuNav;
