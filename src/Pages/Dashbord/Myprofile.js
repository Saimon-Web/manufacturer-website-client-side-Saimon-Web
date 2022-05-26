import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Singleprofile from './Singleprofile';
import Undermyprofile from './Undermyprofile';

const Myprofile = () => {
    const [user] = useAuthState(auth);

    // const [userprofile, setuserprofile] = useState([])
    // useEffect((), [])


  



    const useremail = user?.email;

    const submitHandle = event => {
        event.preventDefault();

        const phone = event.target.phone.value;
        const name = event.target.name.value;
        const education = event.target.education.value;
        const linkdinprofile = event.target.linkdinprofile.value;
        console.log(phone, name, education, linkdinprofile)


        const userprofile = {
            useremail,
            name,
            phone,
            education,
            linkdinprofile,



        }
        fetch('https://pacific-harbor-82020.herokuapp.com/userprofile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userprofile)
        })
            .then(res => res.json())
            .then(data => {
                console.log('addedd informatioon profile', data)

                event.target.reset()
            })


    }

    return (
        <div className=''>
      
            <h4 className='text-center'>Name:{user?.displayName}</h4>
            <h5 className='text-center'>Email:{user?.email}</h5>        
            <div className='mt-5'>
            <Singleprofile></Singleprofile>
            </div>
            <form className='mt-5' action='' onSubmit={submitHandle}>
                <label class="form-label" for="name">Your Name</label>
                <input value={user?.displayName} name='name' type="text" class="form-control" id="email" placeholder="Your Name" />
                <br />

                <label class="form-label" for="productname">Education </label>
                <input type="text" name='education' class="form-control" id="productname" placeholder="Education " />
                <br />

                <label class="form-label" for="productname">Linkdin profile</label>
                <input type="text" name='linkdinprofile' class="form-control" id="address" placeholder="Address" />

                <br />

                <label class="form-label" for="productname">phone number</label>
                <input type="number" class="form-control" name='phone' id="phone" placeholder="phone number" />

                <br />

                <button href="#" class="btn btn-warning w-full">
                    Submit
                </button>



            </form>
        </div>
    );
};

export default Myprofile;