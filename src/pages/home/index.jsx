import { Card, Button, Input } from 'antd';
import React, { useState } from 'react';
import AdCarousel from '../../components/adcasual';
import sc4 from './sc4.png'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const nav = useNavigate();
    const [url, setUrl] = useState('');
    const handleClick = () => {
        if (url) {
            // 确保URL包含http或https
            let finalUrl = url;
            if (!url.startsWith('http://') && !url.startsWith('https://')) {
                finalUrl = 'https://' + url;
            }
            // 在新窗口打开URL
            window.open(finalUrl, '_blank');
        }
    };

    return (
        <>
            <div className='flex w-full h-full items-center'>
                <div className='w-1/3 h-full overflow-hidden'>
                    <img src={sc4} alt="Slide4" className='w-full h-full object-cover' />
                </div>
                <div className='w-2/3 h-full flex flex-col items-center'>
                    <div className='w-full h-full flex flex-col justify-center items-center'>
                        <div className='text-3xl font-black '>
                            Shop Globally with Ease Only on
                        </div>
                        <div className='text-[120px] font-black text-[#1677ff]'>
                            EzBuy
                        </div>
                        <div className='mt-10 flex items-center'>
                            <Input 
                                placeholder='url' 
                                size='large' 
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                            />
                            <Button 
                                size="large" 
                                type='primary'
                                onClick={handleClick}
                            >
                                Let's GO
                            </Button>
                        </div>
                    </div>

                    <div className='w-[600px] h-[200px]'>
                        <AdCarousel />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;