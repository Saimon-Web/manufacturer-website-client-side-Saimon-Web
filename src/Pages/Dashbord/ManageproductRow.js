import React from 'react';
import DeleteModal from './DeleteModal';

const ManageproductRow = ({ product, refetch, setDeletingproduct }) => {
    const { _id, name, description, img, price, MinimumQunatity, AvailableQunatity } = product;


    return (

        <tr>
            <td> <img src={img} height='50px' width='50px' alt="" />{name} </td>
            <td>{price}</td>
            <td>{AvailableQunatity}</td>
            <td>{MinimumQunatity}</td>
            <td>


                <button onClick={() => setDeletingproduct(product)} data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn btn-danger'   >Delete</button>

            </td>


        </tr>

    );
};

export default ManageproductRow;