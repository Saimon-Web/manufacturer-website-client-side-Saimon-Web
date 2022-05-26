import React from 'react';

const Singlepro = ({single}) => {
    const {education,phone,linkdinprofile,_id}=single;
    const handleSubmit =event=> {
        event.preventDefault();
        const linkdinprofile=event.target.linkdinprofile.value;
        const education=event.target.education.value;
        const phone=event.target.phone.value;
        const userprofile={linkdinprofile,education,phone};

        const url=`https://pacific-harbor-82020.herokuapp.com/userprofile/${_id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userprofile)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('successfully added user');
                event.target.reset();
            })
    }
    return (
        <div>
            <p>Education:{single.education}</p>
                    <p>Phone:{single.phone}</p>
                    <p>Linkdinprofile{single.linkdinprofile}</p>
                  
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">update</button>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label">Education:</label>
                                            <input type="text" name='education' class="form-control" id="recipient-name" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="message-text" class="col-form-label">Linkdin Profile:</label>
                                            <input type="text" name='linkdinprofile' class="form-control" id="recipient-name" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="message-text" class="col-form-label">Phone Number:</label>
                                            <input type="text" name='phone' class="form-control" id="recipient-name" />
                                        </div>
                                        <input type="submit" className='btn btn-primary' value="Update" />
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default Singlepro;