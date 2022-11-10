import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const UserReviewData = () => {
    const { user } = useContext(AuthContext);
    const [reviewByEmail, setReviewByEmail] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReviewByEmail(data))
    }, [user?.email])
    return (
        <div>
            <div className=''>

                {
                    reviewByEmail.map(review =>
                        <div className='flex py-4 gap-6'>
                            <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" className='w-1/6' alt="" />

                            <div className=''>
                                <h3 className='text-md'>By <span className='font-bold text-red-400'>{review.user_Name}</span></h3>
                                <h3 className='text-xl'>❝ {review.Message} ❞</h3>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default UserReviewData;