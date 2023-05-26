import React from 'react';
import { MdArrowForwardIos, MdOutlineEmail, MdPhoneInTalk } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Footer = () => {
    
    return (
        <div className='bg-[#f6f6b4]'>
            <div className='max-w-[1320px] mx-auto py-12 flex md:flex-row flex-col gap-y-7 px-4 justify-between'>
                <div>
                    <h1 className='text-2xl font-extrabold text-orange-400'>Free Recipes</h1>
                    <ul className='mt-4 text-base'>
                        <li className='flex items-center gap-x-2 mb-2'><MdArrowForwardIos/> <p>American Hot Chocolate</p></li>
                        <li className='flex items-center gap-x-2 mb-2'><MdArrowForwardIos/> <p>Chicken Cheese Bites Burger</p></li>
                        <li className='flex items-center gap-x-2 mb-2'><MdArrowForwardIos/> <p>Easy Vanilla Ice Cream</p></li>
                        <li className='flex items-center gap-x-2 mb-2'><MdArrowForwardIos/> <p>Homemade Fettuccine Alfredo</p></li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-2xl font-extrabold text-orange-400'>Pro Recipes</h1>
                    <ul className='mt-4 text-base '>
                        <li className='flex items-center gap-x-2 mb-2'><MdArrowForwardIos/> <p>American Hot Chocolate</p></li>
                        <li className='flex items-center gap-x-2 mb-2'><MdArrowForwardIos/> <p>Chicken Cheese Bites Burger</p></li>
                        <li className='flex items-center gap-x-2 mb-2'><MdArrowForwardIos/> <p>Easy Vanilla Ice Cream</p></li>
                        <li className='flex items-center gap-x-2 mb-2'><MdArrowForwardIos/> <p>Homemade Fettuccine Alfredo</p></li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-2xl font-extrabold text-orange-400'>Quick Links</h1>
                    <ul className='mt-4 text-base '>
                        <Link to="/"><li className='flex items-center gap-x-2 mb-2'><MdArrowForwardIos/> <p>Home</p></li></Link>
                        <Link to="/blog"><li className='flex items-center gap-x-2 mb-2'><MdArrowForwardIos/> <p>Blog</p></li></Link>
                        <Link to="#"><li className='flex items-center gap-x-2 mb-2'><MdArrowForwardIos/> <p>About</p></li></Link>
                        <Link to="#"><li className='flex items-center gap-x-2 mb-2'><MdArrowForwardIos/> <p>Contact Us</p></li></Link>
                    </ul>
                </div>
                <div>
                    <h1 className='text-2xl font-extrabold text-orange-400'>Contact</h1>
                    <ul className='mt-4 text-base '>
                        <li className='flex items-center gap-x-2 mb-2'><GoLocation/> <p>ABC Steet, NewYork.</p></li>
                        <li className='flex items-center gap-x-2 mb-2'><MdOutlineEmail/> <p>contact@yourwebsite.com</p></li>
                        <li className='flex items-center gap-x-2 mb-2'><MdPhoneInTalk/> <p>123-456-7878</p></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;