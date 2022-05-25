// import React, { useEffect, useRef, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useParams } from 'react-router-dom';
// import auth from '../../firebase.init';
// import Bookingmodal from './Bookingmodal';

// const ProductDetails = () => {
//     const [user] = useAuthState(auth);

//     // const { id } = useParams();
    // const [product, setProduct] = useState({ orderQunatity: '' });
    // useEffect(() => {
    //     fetch(`https://pacific-harbor-82020.herokuapp.com/product/${id}`)
    //         .then(res => res.json())
    //         .then(data => setProduct(data))
    // }, [])


//     const numberRef = useRef('')
//     const { orderQunatity, ...rest } = product;
//     const minimumNumber = parseInt(product.MinimumQunatity)
//     const maximumNumber = parseInt(product.AvailableQunatity)

//     const handleOrder = event => {
//         event.preventDefault();

//         if (numberRef.current.value >= minimumNumber && numberRef.current.value <= maximumNumber) {
//             const orderQunatity = numberRef.current.value;
//             const product = { orderQunatity }
//             const url = `https://pacific-harbor-82020.herokuapp.com/product/${id}`;
//             fetch(url, {
//                 method: "PUT",
//                 headers: {
//                     'content-type': 'application/json'
//                 },
//                 body: JSON.stringify(product)
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log('success', data);
//                     setProduct({ orderQunatity: orderQunatity, ...rest });
//                     event.target.reset('')
//                 })
//         }
//         else {
//             console.log('valid number')
//             alert('please minimum order 100 0r maximum available quantity enter ')
//         }
//     }

//     //decrease process
//     const order = parseInt(product.orderQunatity)

//     const decreaseHandle = () => {
//         if (order === 100) {
//             alert('Look the minimum order quantity')
//         }
//         else {
//             const orderQunatity = order - 1;
//             const product = {
//                 orderQunatity
//             }
//             const url = `https://pacific-harbor-82020.herokuapp.com/product/${id}`;
//             fetch(url, {
//                 method: "PUT",
//                 headers: {
//                     'content-type': 'application/json'
//                 },
//                 body: JSON.stringify(product)
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log('success', data);
//                     setProduct({ orderQunatity: orderQunatity, ...rest });

//                 })
//         }
//     }
//     return (
//         <div class="py-24">
//             <div class="container max-w-screen-xl">
//                 <div class="row align-items-center">
//                     <div class="col-12 col-lg-5 mb-10 mb-lg-0">
//                         <h3 class="ls-tight font-bolder mb-5">
//                             Client: {user.displayName}
//                         </h3>
//                         <h3 class="ls-tight font-bolder mb-5">
//                             Client Email: {user.email}
//                         </h3>
//                         <h1 class="ls-tight font-bolder display-5 mb-5">
//                             {product.name}
//                         </h1>

//                         <p class="lead mb-10">
//                             {product.description}
//                         </p>
//                         <h3 class="ls-tight font-bolder mb-5">
//                             Price: {product.price}
//                         </h3>
//                         <h3 class="ls-tight font-bolder mb-5">
//                             Minimum Order Quantity: {product.MinimumQunatity}
//                         </h3>
//                         <h3 class="ls-tight font-bolder mb-5">
//                             Available Quantity: {product.AvailableQunatity}
//                         </h3>
//                         <h3 class="ls-tight font-bolder mb-5">
//                             Your Order Quantity: {product.orderQunatity}
//                         </h3>
//                         <button className='btn btn-lg btn-dark shadow-sm mx-2 px-lg-8 disabled'>Decrease</button> :
//                             <button onClick={decreaseHandle} className='btn btn-lg btn-dark shadow-sm mx-2 px-lg-8'>Decrease Order Quantity</button>

//                         <form action="" className='mt-3' onSubmit={handleOrder}>
//                             <input className=' border  mb-3 p-2' type="number" ref={numberRef} name="qunatity"    ref={numberRef}
//                             placeholder='please enter order qunatity' id="" /> <br />

//                             <button className='btn btn-lg btn-dark shadow-sm mx-2 px-lg-8'>Add Quantity</button>

//                         </form>



//                         {/* <button className='btn mt-5 btn-lg btn-dark shadow-sm mx-2 px-lg-8'>Buy Now</button> */}
//                       {(orderQunatity > minimumNumber && orderQunatity<= maximumNumber)?
     
//      <button  type="button" class="btn mt-5 btn-lg btn-dark shadow-sm mx-2 px-lg-8 " data-bs-toggle="modal" data-bs-target="#exampleModal">
//      Buy Now
//   </button>:
//    <button  type="button" class="btn mt-5 btn-lg btn-dark shadow-sm mx-2 px-lg-8 disabled" data-bs-toggle="modal" data-bs-target="#exampleModal">
//    Buy Now
// </button>
//                       }
                       
//                     <Bookingmodal product={product} setProduct={setProduct}></Bookingmodal>


//                     </div>


//                     <div class="col-12 col-lg-6 ms-lg-auto">
//                         <div class="w-xl-12/10 position-relative border">

//                             <span class="d-none d-lg-block position-absolute top-0 start-0 transform translate-x-n32 translate-y-n16 w-2/3 h-2/3 bg-warning opacity-20 rounded-circle filter blur-50"></span>
//                             <span class="d-none d-xl-block position-absolute bottom-0 end-0 transform translate-x-16 translate-y-16 w-32 h-32 bg-warning opacity-60 rounded-circle filter blur-50"></span>

//                             <img alt="..." className='img-fluid' src={product.img} height='900' width='900' />
//                         </div>
//                     </div>
//                 </div>
//             </div>
         
//         </div>
//     );
// };

// export default ProductDetails;