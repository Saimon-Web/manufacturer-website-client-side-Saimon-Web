import React from 'react';
import { toast } from 'react-toastify';

const Makeadminrow = ({ user, index,refetch }) => {
    const { email,role } = user;
    const makeadmin =()=> {
      
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json',
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>{
            if(res.status ===403){
                toast.error('not allow make an admin')
            }
          return res.json()
        })
        .then(data => {
            if(data.modifiedCount >0){
                refetch()
                toast.success('succesfull make an admin')
             }
            
        })

    }
    return (

        <tr>
            <td className='py-2 fs-5'>{index + 1}</td>
            <td className='py-2 fs-5'> {email}</td>
            <td className='fs-4'>{role !=='admin'&&<button onClick={makeadmin} className='btn btn-warning'>Make Admin</button>}</td>
            <td className='fs-4'><button className='btn btn-warning'>Remove User</button></td>

        </tr>


    );
};

export default Makeadminrow;