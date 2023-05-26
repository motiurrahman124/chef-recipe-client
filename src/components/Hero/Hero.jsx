import React from 'react';

const Hero = () => {

    return (
        <div className='bg-yellow-50 bg-opacity-30'>
            <div className='max-w-[1320px] mx-auto md:flex md:flex-row flex flex-col-reverse items-center'>
                <div className='md:mr-[70px]'>
                    <p className='text-[#757575] font-medium text-lg mt-6'>WIDE OPTIONS OF CHOICE</p>
                    <h1 className='text-[#1A1919] font-extrabold md:text-[60px] text-[40px] md:leading-[100px]'>Delicious Recipes</h1>
                    <p className='text-[#757575] font-medium text-lg mt-2'>Get the process of making awesome foods for your family and friends. Inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. </p>
                    <button className='md:px-7 px-5 md:py-5 py-3 bg-orange-400 rounded-full font-extrabold text-white hover:text-orange-400 hover:bg-white hover:border-orange-400 hover:border border mt-8'>Check Our Menu</button>
                </div>
                <div className='md:h-auto md:min-w-[676px] w-[250px]'>
                    <img className='w-full mx-auto' src="https://png.pngtree.com/png-clipart/20230103/original/pngtree-professional-chef-cooking-tasty-food-concept-png-image_8862824.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;