import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error));
    }
    const routes = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'Blog',
            path: '/blog'
        }
    ]
    const [open, setOpen] = useState(false);

  
    return (
        <nav className='bg-[#f6f6b4] md:px-0 px-2 shadow-md'>
            <header className="md:flex items-center justify-between py-5 max-w-[1320px] mx-auto ">
                <div className="flex-shrink-0">
                    <Link to="/" className="text-[32px] font-extrabold text-[#1A1919]"><span className='text-orange-400'>Recipe</span> Point</Link>
                </div>
                <div onClick={()=>setOpen(!open)} className='md:hidden'>
                    <GiHamburgerMenu className='h-8 w-8 text-[#7E90FE]'/>
                </div>
                <div className="flex-grow mt-2 sm:mt-0 sm:flex sm:justify-center sm:items-center">
                    <ul
                    className={`md:flex gap-6 ${ open ? 'hidden': 'block'} duration-500`}
                    >
                        {
                            routes.map(route =><NavLink key={route.id} to={route.path}> <li className="hover:text-orange-400 text-lg font-bold">{route.name}</li></NavLink>)
                        }
                    </ul>
                </div>
                <div className='md:mt-0 mt-2'>
                    {
                        user ? (
                            <>
                                <div className='flex items-center gap-x-4'>
                                    <img src={user?.photoURL} className='w-[50px] h-[50px] rounded-full object-cover' alt="" title={user?.displayName?.length>0? user?.displayName: ''} />
                                    <button onClick={handleLogout} className='md:px-7 px-5 md:py-3 py-3 bg-orange-400 rounded-full font-extrabold text-white hover:text-orange-400 hover:bg-white hover:border-orange-400 hover:border border h-fit'> Log out</button>
                                </div>
                            </>):
                        <Link to="/login">
                            <button className='md:px-7 px-5 md:py-3 py-3 bg-orange-400 rounded-full font-extrabold text-white hover:text-orange-400 hover:bg-white hover:border-orange-400 hover:border border'>Login</button>
                        </Link>
                    }
                    
                </div>
            </header>
        </nav>
    );
};

export default Header;