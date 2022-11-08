import React from 'react';
import { useLoaderData } from 'react-router';

const ServiceDetails = () => {
    const details = useLoaderData();
    return (
        <div>
            <h3>kise : {details.title}</h3>
        </div>
    );
};

export default ServiceDetails;