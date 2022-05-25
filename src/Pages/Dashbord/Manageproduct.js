import React, { useState } from 'react';
import { useQuery } from 'react-query';

import useProducts from '../../hooks/Useproducts';
import Loading from '../Loading';
import DeleteModal from './DeleteModal';

import ManageproductRow from './ManageproductRow';

const Manageproduct = () => {
   
    const [deletingproduct, setDeletingproduct] = useState(null);
    
    const { data: products, isLoading, refetch } = useQuery('product', () => fetch('https://pacific-harbor-82020.herokuapp.com/product', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }

    ).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='container-fluid mx-auto'>
            <div class="table-responsive ">
                <table class="table table-hover table-nowrap">
                    <thead class="thead-light w-full">
                        <tr>
                            <th className='fs-6 fw-bold' scope="col">Product Name</th>
                            <th className='fs-6 fw-bold' scope="col">Price</th>
                            <th className='fs-6 fw-bold' scope="col">Available Quantity</th>
                            <th className='fs-6 fw-bold' scope="col">Minimum Order Quantity</th>
                            <th className='fs-6 fw-bold' scope="col"></th>

                        </tr>
                    </thead>
                    <tbody>
                        {

                            products.map(product => <ManageproductRow
                                key={product._id}
                                product={product}

                                refetch={refetch}
                                setDeletingproduct={setDeletingproduct}
                            ></ManageproductRow>)

                        }
                        {deletingproduct && <DeleteModal
                            deletingproduct={deletingproduct}
                            refetch={refetch}
                            setDeletingproduct={setDeletingproduct}
                        ></DeleteModal>}



                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Manageproduct;
