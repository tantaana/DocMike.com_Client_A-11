import React from 'react';

const ServiceList = ({ service }) => {
    const { title, img, description, rating, price } = service;
    return (
        <div>
            <div className="card lg:card-side bg-blue-500 shadow-xl">
                <figure><img src={img} className="" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <h3 className='text-xl font-bold mb-6'>Rating: {rating}⭐⭐⭐</h3>
                    <div className="card-actions flex justify-between items-center">
                        <h2 className='text-xl font-bold'><span className='text-black'>Price:</span> ${price}</h2>
                        <button className="btn btn-accent">View Details</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ServiceList;