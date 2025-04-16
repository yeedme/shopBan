import React from 'react';
import MenuNav from '../components/menu';
import { Button, Card } from 'antd';
import AdCarousel from '../components/adcasual';

const Layout = () => {
    return (
        <div className='w-screen h-screen  flex flex-col bg-sky-300' >
            <div className='h-12 w-full bg-white flex justify-between items-center '>
                <div className='w-[30px]'>
                    123
                </div>
                <MenuNav />
                <div className='w-[30px]'>
                    123
                </div>
            </div>
            {/** mianconetnet*/}
            <div className='flex-1 flex'>
                <div className='w-3/5 h-full bg-blue-300 flex flex-col justify-between items-center '>
                    <div className='w-full h-[100px] flex justify-center items-center text-white' >
                        <h2 className='text-4xl font-bold'>
                            EzBuy
                        </h2>
                        <br />
                        <h3> — Shop the World, Effortlessly</h3>
                    </div>
                    {/**AD */}
                    <div className='w-[600px] h-[400px]'>                        <AdCarousel />
                    </div>
                </div>

                <div className='flex flex-col w-2/5 justify-around items-center'>
                    <Card className='w-[400px] h-[300px] flex  flex-col items-center ' hoverable >
                        <div className='h-[230px]'>
                        <h1>Purchasing service</h1>
                        <h3>I need to purchase from another website on behalf of someone</h3>
                         <p>text</p>
                        </div>
                        <div>
                        <Button className='w-full h-[40px]'>马上出发</Button>

                        </div>
                    </Card>
                    <Card className='w-[400px] h-[400px]  flex justify-center items-center flex-col ' hoverable>
                        <div className='h-[330px]'>
                    <h1>Purchasing service</h1>
                        <h3>I need to purchase from another website on behalf of someone</h3>
                         <p>text</p>
                        </div>
                        <div>
                        <Button className='w-full h-[40px]'>马上出发</Button>

                        </div>
                    </Card>
                </div>
            </div>  
        </div>
    );
}

export default Layout;
