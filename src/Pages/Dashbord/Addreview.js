import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './Addreview.css'
const Addreview = () => {
    const [user] = useAuthState(auth)
    const handleReview = event => {
        event.preventDefault();
        const ratings = event.target.number.value;
        if (parseInt(ratings) >= 1 && parseInt(ratings) <= 5) {
            toast('success')
        }
        else {
            toast.error('1 to 5 ratings')
            return
        }

        const description = event.target.description.value;
        const name = user.displayName;
        const review = {
            ratings,
            description,
            name
        }
        fetch('https://pacific-harbor-82020.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                event.target.reset()
            })
    }
    return (
        <div className='review '>
            <div class="card">
                <div class="card-body ">

                    <form className='' action="" onSubmit={handleReview}>

                        <div class="mb-3">
                            <label class="form-label" >Your Opinion</label>
                            <input name='description' type="text" class="form-control" id="text" placeholder="Description" required />
                        </div>
                        <div class="mb-3">
                            <label class="form-label" >Ratings</label>
                            <input name='number' type="number" class="form-control" id="rating" placeholder="Ratings" required />
                        </div>
                        <div>
                            <button className='btn btn-warning w-full mt-5'>Add Review</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Addreview;