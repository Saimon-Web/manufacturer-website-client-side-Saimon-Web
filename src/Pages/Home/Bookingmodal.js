import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Bookingmodal = ({ product,setProduct }) => {
    const { name,price,orderQunatity } = product;

    const pri=parseInt(price)
    const ord=parseInt(orderQunatity)
    const totalPrice= pri*ord;
    console.log(totalPrice)
    const [user]=useAuthState(auth);
    const submitHandle=event=>{
        event.preventDefault();
        
        const order={
            name,
            totalPrice,
            orderQunatity,
            phone:event.target.phone.value,
            client:user.displayName,
            clientemail:user.email,

        }
        fetch('https://pacific-harbor-82020.herokuapp.com/order',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            toast('successfull your order ,please payment clear')
            event.target.reset()
        })
    }
    return (
        <div>
           
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Info and Purchase</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={submitHandle}>
                                <div class="mb-3">
                                    <label class="form-label" for="name">Your Name</label>
                                    <input value={user?.displayName} name='name' type="text" class="form-control" id="email" placeholder="Your Name"/>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="email">Email address</label>
                                    <input value={user?.email} type="email" name='email' class="form-control" id="email" placeholder="Your email address"/>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="productname">Product Name</label>
                                    <input value={name} type="text" name='productname' class="form-control" id="productname" placeholder="Product Name"/>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="productname">Order Quantity</label>
                                    <input value={orderQunatity} type="text" name='order' class="form-control" id="order" placeholder="Product Price"/>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="productname">Total Price</label>
                                    <input value={`$${totalPrice}`} name='totalprice' type="text" class="form-control" id="v" placeholder="Product Price"/>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="productname">phone number</label>
                                    <input  type="number" class="form-control" name='phone' id="phone" placeholder="phone number"/>
                                </div>
                              
                              
                                <div>
                                    <button href="#" class="btn btn-warning w-full">
                                  Submit
                                    </button>
                                </div>
                            </form>

                            <div>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bookingmodal;