import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Loading';

const Singleprofile = () => {
    const [user]=useAuthState(auth)
    const { data:singles, isLoading, refetch } = useQuery(['userprofile', user], () => fetch(`https://pacific-harbor-82020.herokuapp.com/singleprofile?useremail=${user?.email}`, {
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
            <h2>single : {singles.length}</h2>
        </div>
    );
};

export default Singleprofile;