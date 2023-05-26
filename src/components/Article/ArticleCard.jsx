import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';

const ArticleCard = ({data}) => {
    return (
        <div className='md:grid md:grid-cols-5 gap-4'>
            <div className='col-span-2'>
                <img className='md:h-[75%] w-full' src={data?.img} alt="" />
            </div>
            <div className='col-span-3 md:mt-0 mt-4'>
                <div className='flex justify-between'>
                    <p className='text-base'>Author: {data?.author_name}</p>
                    <p className='text-base'>{data?.publish_date}</p>
                </div>
                <h1 className='text-[24px] font-bold mt-2'>{data?.title}</h1>
                <p>In {data?.subtitle}</p>
                <p className='mt-6'>{data?.description}</p>
                <button className='mt-5 md:px-4 px-3 md:py-2 py-2 bg-orange-400 rounded-lg font-bold text-white hover:text-orange-400 hover:bg-white hover:border-orange-400 hover:border border flex items-center'>
                    <p>Read More</p> <BiRightArrowAlt className='text-xl mt-1 ml-1'/> 
                </button>
            </div>
        </div>
    );
};

export default ArticleCard;