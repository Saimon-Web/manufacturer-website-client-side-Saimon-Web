import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading';
import Allorderrow from './Allorderrow';
import OrderDeletemodal from './OrderDeletemodal';

const Allorder = () => {
    const [deletingproduct, setDeletingproduct] = useState(null);
    const { data: orders, isLoading, refetch } = useQuery('orders', () =>
        fetch('https://pacific-harbor-82020.herokuapp.com/order', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div class="table-responsive ">
            <table class="table table-hover table-nowrap">
                <thead class="thead-light w-full">
                    <tr>
                        <th className='fs-4'>Serial </th>
                        <th className='fs-4'>Client</th>
                        <th className='fs-4'>Client Email</th>
                        <th className='fs-4'>Product Name</th>
                        <th className='fs-4'>Price</th>
                        <th className='fs-4'></th>
                        <th className='fs-4'></th>


                    </tr>
                </thead>
                <tbody>


                    {
                        orders.map((order, index) => <Allorderrow
                            order={order}
                            index={index}
                            refetch={refetch}
                            setDeletingproduct={setDeletingproduct}
                        ></Allorderrow>)
                    }

                    {deletingproduct && <OrderDeletemodal
                        deletingproduct={deletingproduct}
                        refetch={refetch}
                        setDeletingproduct={setDeletingproduct}
                    ></OrderDeletemodal>}
                </tbody>
            </table>
        </div>
    );
};

export default Allorder;