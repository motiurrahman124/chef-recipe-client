import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiOutlineLike } from 'react-icons/ai';
import ViewChefCard from './ViewChefCard';
import { RotatingLines } from 'react-loader-spinner';
import LazyLoad from 'react-lazy-load';

const ViewChef = () => {
    const data = useLoaderData()
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
        <div className='max-w-[1320px] mx-auto my-20'>
            <div className='grid md:grid-cols-2 gap-10 items-center md:px-0 px-2'>
                <LazyLoad >
                    <img className='' src={data?.img} alt="" />
                </LazyLoad>
                <div>
                    <h1 className='text-2xl font-extrabold'>{data?.name}</h1>
                    <p className='mt-6 text-[#545B61]'><span className='font-bold'>The year of experience: </span>{data?.experience} year</p>
                    <p className='mt-2 text-[#545B61]'><span className='font-bold'>The number of recipes: </span>{data?.recipes?.length}</p>
                    <p className='mt-2 text-[#545B61]'><span className='font-bold'>About: </span>{data?.about}</p>
                    <div className='mt-4 flex items-center gap-x-2'>
                        <AiOutlineLike className='text-2xl text-orange-400 mt-1'/>
                        <p className='text-[#545B61] text-base mt-2 flex-grow'>{data?.likes}</p>
                    </div>
                </div>
            </div>
            <div className='mt-20 md:px-0 px-2'>
                <h1 className='text-center font-extrabold text-5xl'>Recipes</h1>
                <p className='text-base text-gray-500 text-center my-2'>Lorem ipsum dolor sit amet, consectetur</p>
                <div className='mt-12 grid md:grid-cols-3 gap-10'>
                    {
                        data?.recipes?.map((recipes, i) => <ViewChefCard key={i} data={recipes}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ViewChef;