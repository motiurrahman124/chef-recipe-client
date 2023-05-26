import React from 'react';
import ArticleCard from './ArticleCard';
import { useState } from 'react';
import { useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';

const Article = () => {
    const [article, setArticle] = useState()

    useEffect(()=>{
        fetch('https://chef-recipe-point-server-motiurcsenubtk-gmailcom.vercel.app/article')
        .then(res =>res.json())
        .then(data => setArticle(data))
    },[])

    if(!article)
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
            <h1 className='text-center font-extrabold text-5xl'>Latest Article</h1>
            <p className='text-base text-gray-500 text-center my-2'>Lorem ipsum dolor sit amet, consectetur</p>
            <div className='my-20 grid md:grid-cols-2 gap-x-10 gap-y-20'>
                {
                    article?.map(article => <ArticleCard key={article?._id} data={article}></ArticleCard>)
                }
            </div>
            
        </div>
    );
};

export default Article;