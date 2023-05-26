import React, { useContext, useState } from 'react';
import { AiFillGithub, AiOutlineGoogle } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);
    const {signIn, handleGoogleSignIn, handleGithubSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset();
                navigate(from, {replace:true});
            })
            .catch(error => {
                setError('Your have entered wrong credentials')
            })
    }

    const handleLoginGoogle = () =>{
        handleGoogleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                navigate(from, {replace:true});
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleLoginGithub = () =>{
        handleGithubSignIn()
        .then( result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace:true});
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className='flex justify-center items-center bg-yellow-50 bg-opacity-30'>
            <div className='md:border border-orange-500 my-[128px] p-[42px] rounded-lg'>
                <h2 className='text-[#2A414F] text-[35px] text-center mb-[30px]'>Login</h2>
                {
                    error?.length>2 && <p className='my-5 bg-red-50 text-center py-4 rounded-lg text-red-500'>{error}</p>
                }
                <form onSubmit={handleLogin}>
                    <div className="">
                        <label className='text-[#2A414F] text-[17px] block mb-2' htmlFor="email">Email</label>
                        <input type="email" name="email" className='border border-[#95A0A7] text-[21px] pl-[10px] py-2 md:w-[415px] rounded-md'  required />
                    </div>
                    <div className="mt-5">
                        <label className='text-[#2A414F] text-[17px] block mb-2' htmlFor="password">Password</label>
                        <input type={show? "text": "password"} name="password" className='border border-[#95A0A7] text-[21px] pl-[10px] py-2 md:w-[415px] rounded-md' id="" required />
                        <p onClick={() => setShow(!show)}>
                            <small>
                            {
                                show ? <span>Hide Password</span>: <span>Show Password</span>
                            }
                            </small>
                        </p>
                    </div>
                    <input className='text-[21px] cursor-pointer font-bold rounded-md bg-orange-400 text-white w-full py-[12px] mt-11 mb-[9px]' type="submit" value="Login" />
                </form>
                <p className='text-center mt-4'>or</p>
                <div>
                    <button onClick={handleLoginGoogle} className='text-[21px] cursor-pointer font-bold rounded-md bg-white hover:bg-orange-400 hover:text-white text-orange-400 border border-orange-400 w-full py-[12px] mt-4 mb-[9px] flex items-center justify-center gap-x-2'><AiOutlineGoogle size={24}/><p>Login with google</p></button>
                    <button onClick={handleLoginGithub} className='text-[21px] cursor-pointer font-bold rounded-md bg-white hover:bg-orange-400 hover:text-white text-orange-400 border border-orange-400 w-full py-[12px] mt-4 mb-[9px] flex items-center justify-center gap-x-2'><AiFillGithub size={24}/><p>Login with github</p></button>
                </div>
                <p className='text-[#2A414F] text-[15px] mt-4'>Are you a new member? <Link to="/signup"><span className='text-[#FF9900]'>Create New Account</span></Link></p>
            </div>
        </div>
    );
};

export default Login;