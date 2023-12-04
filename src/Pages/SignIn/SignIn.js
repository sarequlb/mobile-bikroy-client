import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const SignIn = () => {
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const { register, handleSubmit } = useForm()

    const navigate = useNavigate()

    const [forgetEmail, setForgetEmail] = useState()

    const [error, setError] = useState()

    const { loginWithEmail, emailReset,googleSignIn,facebookSignIn } = useContext(AuthContext)

    const handleEmailBlur = (e) => {
        setForgetEmail(e.target.value)
        console.log(e.target.value)
    }


    const handleClick = () => {
        if (!forgetEmail) {
            toast.error('type your email')
        }
        else {
            emailReset(forgetEmail)
            .then(() =>{
                toast.success('verification email sent, please check your email')
            })
            .catch(error => {})
        }

    }

    const handleSignIn = (data) => {
        loginWithEmail(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('welcome back')
                navigate(from,{replace:true})
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }


    const handleGoogle = () => {
        googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user)
            navigate('/')
        })
        .catch(error => console.log(error))
    }
    const handleFacebook = () => {
        facebookSignIn()
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error))
    }


    return (
        <div>
            <div className="text-center  mt-40">
                <h1 className="text-5xl mb-10 font-bold">Login now!</h1>
            </div>
            <div className="hero mb-96">
                <div className="hero-content w-96">

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleSignIn)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onFocus={handleEmailBlur} {...register("email",)} type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password")} type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <button onClick={handleClick} className="label-text-alt link link-hover">Forgot password?</button>
                                </label>
                            </div>
                            <h1>Don't have an account? <Link className='text-primary' to={'/signup'}>Sign Up</Link></h1>
                            <span className='text-red-600'>{error}</span>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className='mx-auto mb-10'>
                            <button onClick={handleGoogle} className="btn "> <FcGoogle className='text-2xl'></FcGoogle>Google</button>
                            <span className='mx-2'>or</span>
                            <button onClick={handleFacebook} className="btn "><FaFacebook className='text-2xl'></FaFacebook>Facebook</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;