import React, { useContext, useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Signup = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const {createUser, updateUserData, refreshPage} = useContext(AuthContext);

    const handleSignup = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        setError('')
        if(password !== confirm){
            setError('Your confirm password did not match')
            return
        }
        else if(password.length<6){
            setError('Password must be 6 character or longer')
            return
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                
                updateUserData(loggedUser, name, photo)
                .then(() => {
                    console.log('user updated')
                    form.reset();
                    navigate('/');
                    window.location.reload();
                })
                .catch(error => {
                    setError(error.message);
                })
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }
    
    return (
        <div className='flex justify-center items-center bg-yellow-50 bg-opacity-30'>
            <div className='md:border border-orange-500 my-[128px] p-[42px] rounded-lg'>
                <h2 className='text-[#2A414F] text-[35px] text-center mb-[10px]'>Signup</h2>
                {
                    error?.length>2 && <p className='my-5 bg-red-50 text-center py-4 rounded-lg text-red-500'>{error}</p>
                }
                <form onSubmit={handleSignup}>
                    <div className="">
                        <label className='text-[#2A414F] text-[17px] block mb-2' htmlFor="name">Name</label>
                        <input type="text" name="name" className='border border-[#95A0A7] text-[21px] pl-[10px] py-2 md:w-[415px] rounded-md' id="" required />
                    </div>
                    <div className="mt-5">
                        <label className='text-[#2A414F] text-[17px] block mb-2' htmlFor="name">Photo URL</label>
                        <input type="text" name="photo" className='border border-[#95A0A7] text-[21px] pl-[10px] py-2 md:w-[415px] rounded-md' id="" required/>
                    </div>
                    <div className="mt-5">
                        <label className='text-[#2A414F] text-[17px] block mb-2' htmlFor="email">Email</label>
                        <input type="email" name="email" className='border border-[#95A0A7] text-[21px] pl-[10px] py-2 md:w-[415px] rounded-md' id="" required />
                    </div>
                    <div className="mt-5">
                        <label className='text-[#2A414F] text-[17px] block mb-2' htmlFor="password">Password</label>
                        <input type="password" name="password" className='border border-[#95A0A7] text-[21px] pl-[10px] py-2 md:w-[415px] rounded-md' id="" required />
                    </div>
                    <div className="mt-5">
                        <label className='text-[#2A414F] text-[17px] block mb-2' htmlFor="confirm">Confirm Password</label>
                        <input type="password" name="confirm" className='border border-[#95A0A7] text-[21px] pl-[10px] py-2 md:w-[415px] rounded-md' id="" required />
                    </div>
                    <input className='text-[21px] cursor-pointer font-bold rounded-md bg-orange-400 text-white w-full py-[12px] mt-11 mb-[9px]' type="submit" value="Sign Up" />
                </form>
                <p className='text-[#2A414F] text-[15px] mt-4'>Already have an account? <Link to="/login"><span className='text-[#FF9900]'>Login</span></Link></p>
            </div>
        </div>
    );
};

export default Signup;