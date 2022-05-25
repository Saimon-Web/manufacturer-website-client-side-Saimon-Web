import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Loading';
import Myorderrow from './Myorderrow';
import OrderDeletemodal from './OrderDeletemodal';

const Myorder = () => {
    const [deletingproduct, setDeletingproduct] = useState(null);
    const [user] = useAuthState(auth);
    console.log(user?.email)
   /* //    const [orders,setorders]=useState([]);
    //    useEffect(()=> {
    //        fetch(`https://pacific-harbor-82020.herokuapp.com/useorder?clientemail=${user?.email}`,{
    //         method: "GET",
    //         headers: {
    //           authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //    }})
    //        .then(res=>res.json())
    //        .then(data=>setorders(data))
    //    },[user])*/
    const { data: orders, isLoading, refetch } = useQuery(['order',user], () => fetch(`https://pacific-harbor-82020.herokuapp.com/useorder?clientemail=${user?.email}`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='container-fluid mx-auto'>
            <h2>order:{orders.length}</h2>
            <div class="table-responsive ">
                <table class="table table-hover table-nowrap">
                    <thead class="thead-light w-full">
                        <tr>
                            <th className='fs-4'>Serial </th>

                            <th className='fs-4'>Product Name</th>
                           
                            <th className='fs-4'>Price</th>
                            <th className='fs-4'></th>
                            <th className='fs-4'></th>

                        </tr>
                    </thead>
                    <tbody>
                        {

                            orders.map((order, index) => <Myorderrow
                                key={order._id}
                                order={order}
                                index={index}
                                refetch={refetch}
                                setDeletingproduct={setDeletingproduct}
                            ></Myorderrow>)

                        }
                        {deletingproduct && <OrderDeletemodal
                            deletingproduct={deletingproduct}
                            refetch={refetch}
                            setDeletingproduct={setDeletingproduct}
                        ></OrderDeletemodal>}

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Myorder;