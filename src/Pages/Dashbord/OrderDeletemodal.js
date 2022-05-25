import React from 'react';

const OrderDeletemodal = ({deletingproduct,setDeletingproduct,refetch}) => {
    const{_id}=deletingproduct;
    // const[products,setProducts]=useProducts();
    const handleDelete=(_id)=> {
      
      // console.log(id,name)
       const url=` http://localhost:5000/order/${_id}`
       fetch(url,{
           method:"DELETE"
       })
       .then(res=> res.json())
       .then(data=> {
           console.log('success',data)
       // delete from ui 
       refetch();
       setDeletingproduct(null)                   
       })  
   }   
    return (
        <div class="modal fade" id="orderdeleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Delete Product</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Are you sure you want to delete this order?
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button data-bs-dismiss="modal"     onClick={()=>handleDelete(_id)} type="button" class="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default OrderDeletemodal;