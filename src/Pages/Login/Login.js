import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/login.png'

const Login = () => {
    return (
        <div className='mt-20 flex justify-center'>
            <div className="hero py-20 bg-base-200 mx-20">
                <div className="hero-content flex-col xl:flex-row-reverse gap-40">
                    <div className="lg:text-left">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold text-center mb-10"><span className='text-red-500'>Login</span></h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Your Email 📧</span>
                                </label>
                                <input type="text" name="email" placeholder="Type your email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Your Password 🔐</span>
                                </label>
                                <input type="text" name="password" placeholder="Type your password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-lg">Forgot password?</a>
                                </label>
                                <h3 className='text-lg font-bold mt-10'>Don't have an account? <Link className='text-yellow-500 font-bold' to='/register'>Register</Link> here</h3>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-accent">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;