import React from 'react';

const Business = ({ business }) => {
    return (
        <div className="business">
            <img src={business.image} alt={business.name} />
            <h2>{business.name}</h2>
            <p>{business.address}</p>
            <p>
                {business.city}, {business.state} {business.zipcode}
            </p>
            <p>Category: {business.category}</p>
            <p>Rating: {business.rating}</p>
            <p>Reviews: {business.reviewCount}</p>
        </div>
    );
};

export default Business;

// const BusinessObj =
// {
//     image: '',
//     name: '',
//     address: '',
//     city: '',
//     zipcode: '',
//     category: '',
//     rating: '',
//     reviewCount: ''
// };

// function Business(business) {
//     return (
//         <div className="business">
//             <img src={business.image} alt="Restaurant" />
//             <h2>{business.name}</h2>
//             <p>{business.address}</p>
//             <p>{business.city}</p>
//             <p>{business.zipcode}</p>
//             <p>{business.category}</p>
//             <p>{business.rating}</p>
//             <p>{business.reviewCount}</p>
//         </div>
//     );
// }
// Business.js