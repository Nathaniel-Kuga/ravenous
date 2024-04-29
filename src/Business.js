import React from 'react';

// const Business =
// {
//     image:
// };

function Business(business) {
    return (
        <div className="business">
            <img src={business.image} alt="Restaurant" />
            <h2>{business.name}</h2>
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{business.zipcode}</p>
            <p>{business.category}</p>
            <p>{business.rating}</p>
            <p>{business.reviewCount}</p>
        </div>
    );
}

export default Business;