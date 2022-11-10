import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    console.log(reviews.length)

    useEffect(() => {
        fetch(`http://localhost:5000/reviewsUser?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user.email])
    return (
        <div>
            <div className='px-10'>
                <h3 className='text-2xl font-bold my-10'>Logged In User: <span className='text-red-400'>{user.email}</span></h3>
                {reviews.length > 0 ?
                    <>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">

                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Service</th>
                                        <th>User Review</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                {
                                    reviews.map(review =>

                                        <tbody>

                                            <tr>
                                                <th>
                                                    <label>
                                                        <input type="checkbox" className="checkbox" />
                                                    </label>
                                                </th>
                                                <td>
                                                    <div className="flex items-center space-x-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold text-xl">{review.user_Name}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='font-bold text-yellow-500 text-xl'>
                                                    {review.title}
                                                </td>
                                                <td className='text-xl'>❝ {review.Message} ❞</td>
                                                <th>
                                                    <button className="btn btn-ghost btn-xs">details</button>
                                                </th>
                                            </tr>

                                        </tbody>


                                    )
                                }
                            </table>
                        </div>
                    </> :
                    <h3 className='text-4xl font-bold text-red-500 text-center'>No User Review Found</h3>}
            </div>
        </div>
    );
};

export default MyReviews;