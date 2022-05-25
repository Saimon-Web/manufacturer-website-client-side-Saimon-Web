import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ order }) => {
  const { price, client, clientemail, _id } = order;
  const stripe = useStripe();
  const elements = useElements();
  const [Carderror, setCarderror] = useState('')
  const [success, setSuccess] = useState('')
  const [processing, setprocessing] = useState(false)
  const [transaction, setTransaction] = useState('')
  const [clientSecret, setClientSecret] = useState("");



  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://pacific-harbor-82020.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret)
        }
      });
  }, [price]);

  const handleSubmit = async event => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });


    if (error) {
      setCarderror(error)

    } else {
      setCarderror(' ')
    }


    //confirm payment method 
    const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: client,
            email: clientemail
          },
        },
      },

    );

    if (intentError) {
      setCarderror(intentError.message)
      setprocessing(false)
    }
    else {
      setSuccess('congrats your payment is clear')
      setTransaction(paymentIntent.id)
      //store payment on database
      const payment = {
        order: _id,
        transaction: paymentIntent.id
      }
      fetch(`https://pacific-harbor-82020.herokuapp.com/order/${_id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setprocessing(false)
        });

    }


  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',

                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-success' type="submit" disabled={!stripe || !elements}>
          Pay
        </button>
      </form>
      {Carderror && <p className='text-red-500'>{Carderror.message}</p>}
      {success && <div>
        <p className='text-green-500'>{success}</p>
        <p>your transaction id : {transaction}</p>
      </div>}
    </>
  );
};

export default CheckoutForm;