import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading';
import Bookingmodal from './Bookingmodal';
import Product from './Product';

const Products = () => {

    const {data:products,isLoading,refetch}=useQuery('/product',()=> fetch('http://localhost:5000/product').then(res=>res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='mt-5'>
           <h2 className='text-warning fs-1 fw-bold'>Parts</h2>
         <div className="container">
             <div className="row">
             {
               products.map(product => <Product
               key={product._id}
               product={product}
               ></Product>)
           }
       
               
             </div>
            

         </div>
            
        </div>
    );
};

export default Products;