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
        label: 'EZBUy-shop',
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
     navigate(e.key)
      setCurrent(e.key);
    };
    return (
      <>
  
      <div className='w-[700px] bg-red-700'>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      </div>

      </>
    );
}

export default MenuNav;
