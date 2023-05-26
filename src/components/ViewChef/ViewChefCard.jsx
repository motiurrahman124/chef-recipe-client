import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ViewChefCard = ({data}) => {
    const [favourite, setFavourite] = useState(false)

    const handleFavourite = () =>{
        setFavourite(true)
        toast.success("Successfully Added!", {
            position: toast.POSITION.TOP_RIGHT
          });
    }

    return (
        <div className='bg-yellow-50 bg-opacity-30 border border-orange-400 border-opacity-30 shadow-sm rounded-lg'>
            <ToastContainer />

            <div className='p-[26px]'>
                <h1 className='text-[#181818] text-2xl font-extrabold text-center mb-4'>{data?.name}</h1>
                <div className='mb-4 flex items-center'>
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={data?.rating}
                        readOnly
                    />
                    <p className='ml-2 flex-grow'>{data?.rating}</p>
                    {
                        !favourite ?
                        <BsHeart onClick={handleFavourite} className='text-xl cursor-pointer'/> : <BsHeartFill className='text-xl disabled' disabled={favourite}/>
                    }
                </div>
                <p><span className='font-bold'>Ingredients: </span>{data?.ingredients?.map((d,i) => <span>{d}{data?.ingredients.length === i + 1 ? " ": ", "}</span>)}</p>
                <p className='mt-2 '><span className='font-bold '>Cooking Method: </span>{data?.cooking_method}</p>
            </div>
        </div>
    );
};

export default ViewChefCard;