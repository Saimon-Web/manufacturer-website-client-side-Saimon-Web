import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Myprofile = () => {
    const [user]=useAuthState(auth);
    return (
        <div className=''>
           <h2 className='text-center'>my profile</h2> 

           <h4  className='text-center'>Name:{user?.displayName}</h4>
           <h5  className='text-center'>Email:{user?.email}</h5>
        </div>
    );
};

export default Myprofile;