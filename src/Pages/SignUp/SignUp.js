import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleSignup = (data) => {
        console.log(data)
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
                                    className="select select-bordered">
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
                            </div>
                            <h1>Already have an account? <Link className='text-primary' to={'/signin'}>Sign In</Link></h1>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;