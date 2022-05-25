import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Myorderrow = ({order,refetch,setDeletingproduct,index}) => {
    const{client,price,name,orderQunatity,clientemail,_id,transactionId}=order;
    const { id } = useParams();
    const [product, setProduct] = useState({ });
    const navigate=useNavigate();
    // useEffect(() => {
    //     fetch(`http://localhost:5000/product/${id}`)
    //         .then(res => res.json())
    //         .then(data => setProduct(data))
    // }, [])
    const handleClick=(_id)=>{
        navigate(`/order/${_id}`)
    }
 
    return (
        
        <tr>
            <td className='py-2 fs-5'>{index + 1}</td>
        
            <td className='py-2 fs-5'> {name}</td>
           
            <td className='py-2 fs-5'> {price}</td>
            
          
            <td>{(order.price && !order.paid) && <button className='btn btn-secondary' onClick={()=>handleClick(_id)}>Pay</button>}
               {(order.price && order.paid) && <div><button className='btn btn-success'>paid</button> <p>Transaction Id: <span className='text-warning'>:{order.transactionId}</span></p></div> } </td>
            <td className='fs-4'><button onClick={() => setDeletingproduct(order)} data-bs-toggle="modal" data-bs-target="#orderdeleteModal"  className='btn btn-danger'>Delete</button></td>
            

        </tr>
    );
};

export default Myorderrow;