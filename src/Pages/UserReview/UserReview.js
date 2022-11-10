import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import UserReviewData from './UserReviewData';

const UserReview = ({ details }) => {
    const { user } = useContext(AuthContext);
    const { title } = details;

    const handleReviewAdd = event => {
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        const review = {
            service: details._id,
            user_Name: name,
            Message: message,
            email: email
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review Added Successfully');
                    form.reset()

                }
            })


    }



    return (
        <div className="hero bg-base-300 mt-20">
            <div className="hero-content flex-col lg:flex-row lg:justify-between">
                <UserReviewData></UserReviewData>
                <form onSubmit={handleReviewAdd}>
                    <h4 className='text-4xl mb-10'>Chosen Treatment : <span className='font-bold text-red-400'>{title}</span></h4>
                    <div className='flex flex-col'>
                        <input type="text" name="email" defaultValue={user?.email} placeholder="" className="input input-bordered w-full max-w-xs mb-6" disabled />
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full max-w-xs mb-6" required />
                        <textarea name="message" className="textarea textarea-info mb-6" placeholder="Please write your message here" required></textarea>
                    </div>
                    <input className='btn btn-accent' type="submit" value="Add Review" />
                </form>
            </div>
        </div>
    );
};

export default UserReview;