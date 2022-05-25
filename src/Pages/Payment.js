import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import Loading from './Loading';

const Payment = () => {
    const { id } = useParams();

    const stripePromise = loadStripe('pk_test_51L18fdFYWyN4h3Jv6aI6oQHYd2qJHDoqSv8OMYx5ET5nXbd58HG5VTQpjj9Qpn1KwotYSJBeTmkMcWYMmiA8GRZu00s7lavQ2e');
    const url = `https://pacific-harbor-82020.herokuapp.com/order/${id}`
    const { data: order, isLoading, refetch } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='text-warning'>Order Id:{order._id}</h3>
            <div class="card">
            <h2 class="card-title">payment for {order.name}</h2>
                    <h4 className='text-success'>please pay ${order.price}</h4>

                <div class="card-body">

             
                    <div className='w-25 mx-auto'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                        order={order} ></CheckoutForm>
                    </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;