import { Carousel } from 'antd';
import React from 'react';
const AdCarouselStylle=' w-[600px] h-[400px] bg-red-100  '
import sc1 from './sc1.png'
import sc2 from './sc2.png'
const AdCarousel = () => {
    return (
        <Carousel autoplay>
            <div className='w-[600px] h-[400px]'>
                <img src={sc1} alt="Slide 1" className='w-full h-full object-cover' />
            </div> 
            <div className='w-[600px] h-[400px]'>
                <img src={sc2} alt="Slide 2" className='w-full h-full object-cover' />
            </div>
        </Carousel>
    );
}

export default AdCarousel;
