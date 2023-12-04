import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import toast from 'react-hot-toast';



const SignUp = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const [signupError, setSignupError] = useState
        ('')

    const { register, handleSubmit, formState: { errors } } = useForm()

    const { createUser, updateUser, googleSignIn, facebookSignIn } = useContext(AuthContext)
    const [confirmPasswordError, setConfirmPasswordError] = useState('')

    const handleSignup = (data) => {
        if (data.password !== data.confirmPassword) {
            setConfirmPasswordError('password did not match')
            return;
        }
        createUser(data.email, data.password)
            .then(result => {
                handleUpdate(data.name)
                toast.success('User Created Successfully')
                navigate(from,{replace:true})
                const user = result.user;
                console.log(user)

                const userInfo = {
                    name: data.name,
                    email: data.email,
                    accountType: data.accountType

                }

                fetch('http://localhost:5000/allUsers',{
                    method: 'POST',
                    headers:{
                        'content-type': 'application/json'
                    },

                    body:JSON.stringify(userInfo)
                })
                .then(res => res.json())
                .then(data =>{
                    console.log(data)
                })
            })
            .catch(error => {
                setSignupError(error.message)
            })

        const handleUpdate = (name) => {
            const profile = {
                displayName: name
            }
            updateUser(profile)
                .then(() => {

                })
                .catch(err => { })
        }

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
        <div className='mb-96'>
            <div className="text-center mt-10 mb-5">
                <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <div className="hero ">
                <div className="hero-content w-11/12">

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleSignup)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name", { required: "email is required" })} type="text" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600 mt-2'>{errors.name.message}</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    {...register("email",
                                        { required: "email is required" }
                                    )} type="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600 mt-2'>{errors.email.message}</span>}
                            </div>
                            <label className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Account Type</span>
                                </label>
                                <select
                                    {...register("accountType")}
                                    className="select select-bordered" >
                                    <option>Seller</option>
                                    <option selected>Buyer</option>
                                </select>
                            </label>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">password</span>
                                </label>
                                <input
                                    {...register("password",
                                        {
                                            required: "password is required",
                                            minLength: { value: 6 },
                                            pattern: { value: /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, message: 'password must have uppercase number & special characters' }
                                        }
                                    )}
                                    type="password" placeholder="password" className="input input-bordered" />
                                {errors.password && <span className='text-red-600 mt-2'>{errors.password.message}</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    {...register("confirmPassword",
                                        {
                                            required: "confirm password is required",
                                        }
                                    )}
                                    type="password" placeholder="Confirm Password" className="input input-bordered" />
                                {errors.confirmPassword && <span className='text-red-600 mt-2'>{errors.confirmPassword.message}</span>}
                                <span className='text-red-600'>{confirmPasswordError}</span>
                            </div>
                            <h1>Already have an account? <Link className='text-primary' to={'/signin'}>Sign In</Link></h1>

                            <span className='text-red-600'>{signupError}</span>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
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

export default SignUp;