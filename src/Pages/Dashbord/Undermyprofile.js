import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Loading';

const Undermyprofile = () => {
    const [user]=useAuthState(auth)
    const [userprofiles,setprofiles]=useState([]);
    useEffect(()=> {
        fetch('https://pacific-harbor-82020.herokuapp.com/userprofile')
        .then(res => res.json())
        .then(data => setprofiles(data))
    },[])
    return (
        <div>
          <h2>userprofile:  {userprofiles.length}</h2>
            
        </div>
    );
};

export default Undermyprofile;