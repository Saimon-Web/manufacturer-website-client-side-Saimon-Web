import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Loading';

const Undermyprofile = () => {
    const [user]=useAuthState(auth)
    const { data: userprofiles, isLoading, refetch } = useQuery(['useprofile', user], () => fetch(`https://pacific-harbor-82020.herokuapp.com/useprofile?useremail=${user?.email}`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
          <h2>userprofile:  {userprofiles.length}</h2>
            
        </div>
    );
};

export default Undermyprofile;