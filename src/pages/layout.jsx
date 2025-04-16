import React from 'react';
import MenuNav from '../components/menu';
import { Card } from 'antd';

const Layout = () => {
    return (
        <div className='w-screen h-screen  flex flex-col bg-blue-50' >
            <div className='h-12 w-full bg-blue-100 flex justify-between items-center bg-white'>
                <div className='w-[30px]'>
                    123
                </div>

                <MenuNav />
                <div className='w-[30px]'>
                    123
                </div>
            </div>
            {/** mianconetnet*/}
            <div className='flex-1 '>
                
                <div className='w-3/5 h-full bg-blue-100'>

                </div>
                    {/* <div className='w-full h-[100px] flex justify-center items-center' >
                    <h2 className='text-4xl font-bold'>
                    EzBuy
                        </h2>
                        <br/>
                        <h3> — Shop the World, Effortlessly</h3>
                    </div>
                    <div className='flex  justify-around items-center'>
                        <Card className='w-[400px] h-[400px]'>
                            asdas
                        </Card>
                        <Card className='w-[400px] h-[400px]'>
                            asdas
                        </Card>
                    </div> */}
                </div>
            
        </div>
    );
}

export default Layout;
