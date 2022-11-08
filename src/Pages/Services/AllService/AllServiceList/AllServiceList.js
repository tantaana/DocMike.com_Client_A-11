import React from 'react';

const AllServiceList = ({ service }) => {
    const { title, img, description, rating, price } = service;
    return (
        <div className='flex justify-center'>
            <div className="card md:w-1/2 sm:w-3/4 bg-base-100 image-full">
                <figure><img src={img} className="w-full" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">{title}</h2>
                    <p>{description}</p>
                    <h3 className='text-xl font-bold mb-6'>Rating: {rating}⭐⭐⭐</h3>
                    <div className="card-actions justify-between items-center flex">
                        <h2 className='text-xl font-bold'>Price: ${price}</h2>
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllServiceList;