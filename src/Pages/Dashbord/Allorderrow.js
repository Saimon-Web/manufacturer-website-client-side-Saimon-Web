import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const Allorderrow = ({order,refetch,index,setDeletingproduct}) => {
    const{client,price,name,clientemail,productId,_id}=order;
    const[processing,setprocessing]=useState(false)
    
   
    const pendignHandle=()=> {
        
        const update={
            name,
        }
        fetch(`http://localhost:5000/order/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(update)
        })
        .then(res=> res.json())
        .then(data=>{
           if(data){
            window.location.reload();
               console.log(data)
           }        
        })    
    }
  

    
    return (
        
        <tr>
            <td className='py-2 fs-5'>{index + 1}</td>
            <td className='py-2 fs-5'> {client}</td>
            <td className='py-2 fs-5'> {clientemail}</td>
            <td className='py-2 fs-5'> {name}</td>
            
            <td className='py-2 fs-5'> {price}</td>
       
            <td>
               {(order.paid && !order.shipped) && <button  onClick={pendignHandle}  className='btn btn-success'>pending</button> }
           

               {( !order.paid) && <button onClick={pendignHandle} className='btn btn-secondary' >unpaid</button>}
               {(order.shipped)? <button onClick={pendignHandle} className='btn btn-warning' >shipped</button>: ''} </td>


            <td className='fs-4'>{!order.paid &&<button onClick={() => setDeletingproduct(order)} data-bs-toggle="modal" data-bs-target="#orderdeleteModal"  className='btn btn-danger'>Delete</button>}</td>
         

        </tr>
    );
};

export default Allorderrow;