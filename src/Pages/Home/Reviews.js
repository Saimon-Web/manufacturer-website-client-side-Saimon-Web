import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const[reviews,setReviews]=useState([]);
    useEffect(()=> {
        fetch('https://pacific-harbor-82020.herokuapp.com/review')
        .then(res=>res.json())
        .then(data=> setReviews(data))
    },[])
    return (
        <div className='py-12 shadow'>
            <h2 className='fs-1 text-warning  mb-5'>Reviews</h2>
           <div className="container">
               <div className="row ">
               {
                reviews.map(review=> <Review
                review={review}
                ></Review>)
            }
               </div>
           </div>
        </div>
    );
};

export default Reviews;