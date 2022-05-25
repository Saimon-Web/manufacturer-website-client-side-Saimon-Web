import React, { useEffect,  useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading';


const Purchase = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const [product, setProduct] = useState({});
    const [isDisabled, setDisabled] = useState(true);
    const [isSubmit, setsubmit] = useState(false);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        fetch(`https://pacific-harbor-82020.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])


    //form submit
    const [error, seterror] = useState('');
    const [Quantity, setQuantity] = useState(100);
 const mini=parseInt(product.MinimumQunatity)
 const maxi=parseInt(product.AvailableQunatity)
    const handlequantity=event=>{
        if(event.target.value >mini ||
            event.target.value <maxi ){
                setQuantity(event.target.value)
                seterror('')
                setsubmit(false)
            }
            if(event.target.value<mini){
                seterror('you need atleast minimum order')
                setsubmit(true)
            }
            if(event.target.value > maxi){
                seterror('you cant more than order')
                setsubmit(true)
            }
    }

    const submitHandle = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        const phone = event.target.phone.value;
        const name = product.name;
        const price = parseInt(product.price)*parseInt(quantity);
        const productId = product._id;
        console.log(price)
    


        const order={
           productId,
           name,
           price, 
           quantity,
           phone,
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
           setDisabled(false)
           event.target.reset()
       })
            
    }

    return (
        <div>
            <h2 className='text-warning'>Purchase Product</h2>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>prodcut details</h2>
                        <h3 class="ls-tight font-bolder mb-5">
                            user: {user.displayName}
                        </h3>
                        <h3 class="ls-tight font-bolder mb-5">
                            user email: {user.email}
                        </h3>
                        <div>
                            <img src={product.img} className='img-fluid ' alt="" />
                        </div>
                        <h1 class="ls-tight font-bolder display-5 mb-5">
                            Product Name: {product.name}
                        </h1>

                        <p class="lead mb-5">
                            Description:{product.description}
                        </p>
                        <h3 class="ls-tight font-bolder mb-5">
                            Price: {product.price}
                        </h3>
                        <h3 class="ls-tight font-bolder mb-5">
                            Minimum Order Quantity: {product.MinimumQunatity}
                        </h3>
                        <h3 class="ls-tight font-bolder mb-5">
                            Available Quantity: {product.AvailableQunatity}
                        </h3>



                    </div>
                    <div className="col-lg-6">
                        <h2 className='mb-5'>Place Order</h2>
                        <form action='' onSubmit={submitHandle}>

                            <label class="form-label" for="name">Your Name</label>
                            <input value={user?.displayName} name='name' type="text" class="form-control" id="email" placeholder="Your Name" />
                            <br />

                            <label class="form-label" for="email">Email address</label>
                            <input value={user?.email} type="email" name='email' class="form-control" id="email" placeholder="Your email address" />

                            <br />
                            <label class="form-label" for="productname">Product Name</label>
                            <input value={product.name} type="text" name='productname' class="form-control" id="productname" placeholder="Product Name" />
                            <br />
                            <label class="form-label" for="productname">Address</label>
                            <input  type="text" name='address' class="form-control" id="address" placeholder="Address" />

                            <br />

                            <label class="form-label" for="price">Product Price</label>
                            <input value={product.price} type="number"
                                name='productname' class="form-control" id="productname" placeholder="" />



                            <br />
                            <label class="form-label" for="productname">phone number</label>
                            <input type="number" class="form-control" name='phone' id="phone" placeholder="phone number" />

                            <br />

                            <label class="form-label" for="productname">product purchase quantity</label>
                            <input type="number"
                            onChange={handlequantity}
                            //  defaultValue={product.MinimumQunatity}
                            Value={Quantity}
                              class="form-control" 
                              name="quantity" 
                              
                              id="" />
                    {error&& <p className='text-danger'>{error}</p>}
                            <br />
                            <button disabled={isSubmit} href="#" class="btn btn-warning w-full">
                                Submit
                            </button>



                        </form>
                        <div className='mt-5'>

                        <Link className='text-light' to='/dashboard/myorder'>
                        <button disabled={isDisabled} className='btn btn-warning w-full'>Payment</button>
                        </Link>
                            
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Purchase;