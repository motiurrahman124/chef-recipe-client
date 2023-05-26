import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    
    return (
        <div>
            <div className="flex flex-col justify-center items-center border-2 h-screen text-center p-[4px]">
                
                <img className='md:w-[500px] w-[250px]' src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7888.jpg?w=2000" alt="" />
                <Link to="/">
                    <button className="md:px-7 px-5 md:py-3 py-3 bg-orange-400 rounded-full font-extrabold text-white hover:text-orange-400 hover:bg-white hover:border-orange-400 hover:border border mt-5">
                        Go To Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default PageNotFound;