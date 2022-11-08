import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/login.png'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const { logIn } = useContext(AuthContext);

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.error(err))

    }
    return (
        <div className='mt-20 flex justify-center'>
            <div className="hero py-20 bg-base-200 mx-20">
                <div className="hero-content flex-col xl:flex-row-reverse gap-40">
                    <div className="lg:text-left">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogIn} className="card-body">
                            <h1 className="text-5xl font-bold text-center mb-10"><span className='text-yellow-500'>Login</span></h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Your Email 📧</span>
                                </label>
                                <input type="email" name="email" placeholder="Type your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Your Password 🔐</span>
                                </label>
                                <input type="password" name="password" placeholder="Type your password" className="input input-bordered" required />
                                <div className="form-control mt-6">
                                    <button className="btn btn-accent" type="submit">Login</button>
                                </div>
                                <h3 className='text-center text-2xl font-bold my-6'>OR</h3>
                                <button className='btn btn-primary mb-6'>Login with Google</button>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-lg">Forgot password?</a>
                                </label>
                                <h3 className='text-lg font-bold mt-10 text-center'>Don't have an account? <Link className='text-red-400 font-bold' to='/signup'>Sign Up</Link> here</h3>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;