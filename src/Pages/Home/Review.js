import React from 'react';
const Review = ({review}) => {
  const {name,description,ratings}=review
  
    return (
             <div className='col-lg-4 py-2  col-sm-12 '>
          <div class="card bg-light mx-auto w-75">
            <div class="card-body">     
             <div class="text-center my-6">
                <h3 >Name:{name}</h3>
                <p>Rating:<span className='text-warning'>{ratings}</span></p>
             <p>  <span>{description}</span></p>
              </div>
            </div>
          </div>
        </div>
      
        
    );
};

export default Review;