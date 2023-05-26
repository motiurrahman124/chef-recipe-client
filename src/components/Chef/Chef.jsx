import React from 'react';
import ChefCard from './ChefCard';
import { RotatingLines } from 'react-loader-spinner';

const Chef = ({data}) => {
    if(!data)
    {
        return(
            <div className='flex justify-center h-screen'>
                <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                />
            </div>
        )
    }
    
    return (
        <div className='max-w-[1320px] mx-auto mt-20'>
            <h1 className='text-center font-extrabold text-5xl'>Our Chef</h1>
            <p className='text-base text-gray-500 text-center my-2'>Lorem ipsum dolor sit amet, consectetur</p>
            <div className='mt-12 grid md:grid-cols-3 gap-10'>
                {
                    data?.map(chef => <ChefCard key={chef?._id} data={chef}></ChefCard>)
                }
            </div>
        </div>
    );
};

export default Chef;