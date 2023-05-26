import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const Benefit = () => {
    return (
        <div className='max-w-[1320px] mx-auto mt-20'>
            <h1 className='text-center font-extrabold text-5xl'>Benefit</h1>
            <p className='text-base text-gray-500 text-center my-2'>Lorem ipsum dolor sit amet, consectetur</p>
            <div className='my-10 grid md:grid-cols-2 gap-y-4 gap-x-[60px] items-center'>
                <div>
                    <h1 className='text-4xl font-extrabold'>Become a Contributor and enjoy program benefits</h1>
                    <p className='text-base text-gray-500 mt-4 mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div className='flex gap-x-4'>
                        <BsFillCheckCircleFill className='text-orange-400 h-fit text-5xl border-[10px] rounded-full border-orange-200'/>
                        <div>
                            <h1 className='text-2xl font-extrabold'>Extra Money</h1>
                            <p className='text-base text-gray-500 mt-2'>Odio blandit convallis aliquet nibh potenti auctor primis neque efficitur commodo porttitor</p>
                        </div>
                    </div>
                    <div className='flex gap-x-4 mt-4'>
                        <BsFillCheckCircleFill className='text-orange-400 h-fit text-5xl border-[10px] rounded-full border-orange-200'/>
                        <div>
                            <h1 className='text-2xl font-extrabold'>Free Certificate</h1>
                            <p className='text-base text-gray-500 mt-2'>Odio blandit convallis aliquet nibh potenti auctor primis neque efficitur commodo porttitor</p>
                        </div>
                    </div>
                    <div className='flex gap-x-4 mt-4'>
                        <BsFillCheckCircleFill className='text-orange-400 h-fit text-5xl border-[10px] rounded-full border-orange-200'/>
                        <div>
                            <h1 className='text-2xl font-extrabold'>Part of the yumma family</h1>
                            <p className='text-base text-gray-500 mt-2'>Odio blandit convallis aliquet nibh potenti auctor primis neque efficitur commodo porttitor</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='w-full' src="https://img.freepik.com/premium-photo/happy-young-couple-cooking-together-kitchen-home_1301-5645.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Benefit;