import React from 'react';
import Hero from '../Hero/Hero';
import Benefit from '../Benefit/Benefit';
import Chef from '../Chef/Chef';
import { useLoaderData } from 'react-router-dom';
import Article from '../Article/Article';
import { RotatingLines } from 'react-loader-spinner';

const Home = () => {
    const chefs = useLoaderData()

    if(!chefs)
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
        <div className='md:px-0 px-2'>
            <Hero/>
            <Chef data={chefs}/>
            <Benefit/>
            <Article data={chefs}/>
        </div>
    );
};

export default Home;