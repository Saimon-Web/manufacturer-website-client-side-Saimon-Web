import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
    const { _id,name, description, img, price, MinimumQunatity, AvailableQunatity } = props.product;
    const navigate=useNavigate();
    const handleClick=(_id)=>{
        navigate(`/product/${_id}`)
    }
    return (
        <div className='col-lg-4 my-5 col-sm-1'>
            <div class="card">
            
                <div class="p-2">
                    <img alt="..." src={img}  className="img-fluid"/>
                </div>
               
                <div class="card-body">
                  
                    <h3 class="h4">{name}</h3>
                    <p class="mt-4 mb-6">Price:{price}  </p>
                    <p class="mt-4 mb-6">Minimum Order:{MinimumQunatity}  </p>
                    <p class="mt-4 mb-6">Available:{AvailableQunatity}  </p>
                    <p class="mt-4 mb-6">{description}  </p>
                <button onClick={()=> handleClick(_id)}  className='btn btn-warning'>BUY NOW</button>
                </div>
            </div>

        </div>
    );
};

export default Product;