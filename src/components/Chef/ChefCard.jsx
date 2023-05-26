import React from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { BiRightArrowAlt } from 'react-icons/bi';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const ChefCard = ({data}) => {
    
    return (
        <div className='bg-yellow-50 bg-opacity-30 border border-orange-400 border-opacity-30 shadow-sm rounded-lg'>
            <LazyLoad>
                <img className='h-[343px] w-full rounded-lg object-cover' src={data?.img} alt="" />
            </LazyLoad>
            <div className='p-[26px]'>
                <h1 className='text-[#181818] text-2xl font-extrabold'>{data?.name}</h1>
                <p className='mt-6 text-[#545B61] font-bold'>The year of experience: {data?.experience} year</p>
                <p className='mt-2 text-[#545B61] font-bold border-b border-[#545B61] pb-3 '>The number of recipes: {data?.recipes.length}</p>
                <div className='mt-4 flex items-center gap-x-2'>
                    <AiOutlineLike className='text-2xl text-orange-400 mt-1'/>
                    <p className='text-[#545B61] text-base mt-2 flex-grow'>{data?.likes}</p>
                    <Link to={`/view-recipe/${data?._id}`} className='md:px-4 px-3 md:py-2 py-2 bg-orange-400 rounded-lg font-bold text-white hover:text-orange-400 hover:bg-white hover:border-orange-400 hover:border border flex items-center'>
                        <p>View Recipes</p> <BiRightArrowAlt className='text-xl mt-1 ml-1'/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;