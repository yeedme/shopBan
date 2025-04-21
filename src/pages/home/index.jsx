import { Card ,Button} from 'antd';
import React from 'react';
import AdCarousel from '../../components/adcasual';

const Home = () => {
    return (
        <>
                 <div className='w-3/5 h-full bg-blue-300 flex flex-col justify-between items-center '>
                    <div className='w-full h-[200px] flex justify-center items-center text-white' >
                        <div className='mt-[100px]'>
                        <h2 className='text-4xl font-bold'>
                        Shop Globally with Ease
                        </h2>
                        <h3>Only on </h3>
                        <br />
                        <h1 className='text-[100px] text-blue-950 underline' > Ezbuy</h1>
                        </div>
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
                        <Button className='w-full h-[40px]'>GO</Button>
                        </div>
                    </Card>
                    <Card className='w-[400px] h-[400px]  flex justify-center items-center flex-col ' hoverable>
                        <div className='h-[330px]'>
                    <h1>Purchasing service</h1>
                        <h3>I need to purchase from another website on behalf of someone</h3>
                         <p>text</p>
                        </div>
                        <div>
                        <Button className='w-full h-[40px]'>GO</Button>
                        </div>
                    </Card>
                </div>
        </>
    );
}

export default Home;
