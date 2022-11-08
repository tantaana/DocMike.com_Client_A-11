import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceList = ({ service }) => {
    const { title, img, description, rating, price } = service;
    const sliced = description.slice(0, 100)
    return (
        <div>
            <PhotoProvider>
                <div className="card lg:card-side bg-blue-600 shadow-xl">
                    <figure><PhotoView src={img}>
                        <img src={img} alt="" />
                    </PhotoView></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold text-yellow-500">{title}</h2>
                        <p>{sliced}....</p>
                        <h3 className='text-xl font-bold mb-6'>Rating: {rating}⭐⭐⭐</h3>
                        <div className="card-actions flex justify-between items-center">
                            <h2 className='text-xl font-bold'><span className='text-black'>Price:</span> ${price}</h2>
                            <button className="btn btn-accent">View Details</button>
                        </div>
                    </div>
                </div>
            </PhotoProvider>
        </div>

    );
};

export default ServiceList;