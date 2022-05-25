import React from 'react';

const Addproduct = () => {
    
    const handleReview=event=> {
        event.preventDefault();
        const AvailableQunatity=event.target.available.value;
        const MinimumQunatity=event.target.minimum.value;
        const description=event.target.description.value;
      const name=event.target.productname.value;
      const price=event.target.price.value;
      const img=event.target.img.value;
      let orderQunatity;
        const product={
            name,
            price,
            MinimumQunatity,
            AvailableQunatity,
            orderQunatity,
            description,
            img
        }
        fetch('https://pacific-harbor-82020.herokuapp.com/product',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            event.target.reset()
        })
    }
    return (
        <div  className='review '>
            <div class="card">
            <div class="card-body ">

                <form className='' action="" onSubmit={handleReview}>
                   
                    <div class="mb-3">
                        <label class="form-label" >Product Name</label>
                        <input name='productname' type="text" class="form-control" id="text" placeholder="Product Name" required />
                    </div>
                    <div class="mb-3">
                        <label class="form-label" >Product Description</label>
                        <input name='description' type="text" class="form-control" id="text" placeholder="Product Description" required />
                    </div>
                    <div class="mb-3">
                        <label class="form-label" >Available Quantity</label>
                        <input name='available' type="number" class="form-control" id="rating" placeholder="Available Quantity" required />
                    </div>
                    <div class="mb-3">
                        <label class="form-label" >Minimum Order Quantity</label>
                        <input name='minimum' type="number" class="form-control" id="rating" placeholder="Minimum Order Quantity" required />
                    </div>
                    <div class="mb-3">
                        <label class="form-label" >Product Price</label>
                        <input name='price' type="number" class="form-control" id="rating" placeholder="Product Price" required />
                    </div>
                    <div class="mb-3">
                        <label class="form-label" >Product Image</label>
                        <input name='img' type="text" class="form-control" id="text" placeholder="Product img url" required />
                    </div>
                    <div>
                        <button className='btn btn-warning w-full mt-5'>Add Product</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Addproduct;