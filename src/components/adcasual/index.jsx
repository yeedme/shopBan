import { Carousel } from 'antd';
import React from 'react';
const AdCarouselStylle=' w-[600px] h-[400px] bg-red-100  '
import cc3 from './cc3.jpg'
import cc2 from './cc2.png'
import cc1 from './cc1.jpg'
const AdCarousel = () => {
    return (
        <Carousel autoplay>
            <div className='w-[700px] h-[200px]'>
                <img src={cc1} alt="Slide 1" className='w-full h-full object-cover' />
            </div> 
            <div className='w-[700px] h-[200px]'>
                <img src={cc2} alt="Slide 2" className='w-full h-full object-cover' />
            </div>
            <div className='w-[700px] h-[200px]'>
                <img src={cc3} alt="Slide 3" className='w-full h-full object-cover' />
            </div>
        </Carousel>
    );
}

export default AdCarousel;
