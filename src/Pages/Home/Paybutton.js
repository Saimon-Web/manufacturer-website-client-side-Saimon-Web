import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Paybutton = ({order,refetch}) => {
    const { id } = useParams();
    const{_id}=order;
    const navigate=useNavigate();
    const handleClick=(_id)=>{
        navigate(`/order/${_id}`)
    }
    return (
        <div>
            <button onClick={()=>handleClick(_id)}>Pay</button>
        </div>
    );
};

export default Paybutton;