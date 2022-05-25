import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading';
import Makeadminrow from './Makeadminrow';

const Makeadmin = () => {
    const{data:users,isLoading,refetch}=useQuery('users',()=> 
        fetch('http://localhost:5000/user',{
            method:'GET',
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }}).then(res=> res.json())
    )
    if(isLoading){
        return <Loading></Loading>
    }
    return (
                  <div class="table-responsive ">
                    <table class="table table-hover table-nowrap">
                        <thead class="thead-light w-full">
                            <tr>
                                <th className='fs-4'>Serial </th>
                                <th className='fs-4'>User</th>
                               <th></th>
                               <th></th>
                               

                            </tr>
                        </thead>
                        <tbody>

             {
                 users.map((user,index)=> <Makeadminrow
                 user={user}
                 index={index}
                 refetch={refetch}
                 ></Makeadminrow>)
             }


                        </tbody>
                    </table>
                </div>

          
   
    );
};

export default Makeadmin;