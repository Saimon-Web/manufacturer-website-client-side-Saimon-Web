import React from 'react';
import bg from '../../images/bg-car.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFlag,faHandHoldingHand,faMessage } from '@fortawesome/free-solid-svg-icons'
const Summary = () => {
    return (
        <div>
            <div class="card">
                <h2 className='fs-1 mb-5 mt-5 text-primary fw-bold'>ALL KINDS OF PARTS THAT YOU <br />
                    NEED CAN FIND HERE</h2>
                <div class="card-body">
                    <div class="d-flex justify-content-center">
                        <img src={bg} alt="" />
                    </div>
                    <div class="text-center my-6">

                     <h1 className='fs-1 mb-5 mt-5 text-primary fw-bold'>Our Mission</h1>

                        <span class="d-block text-sm ">
                            This is a list of automotive parts mostly for vehicles using internal combustion engines which are manufactured components of automobiles.

                            This category is for components and parts that make up automobile (car) bodies including accessories.

                            On motorbikes their main function is to shield the rider from wind, though not as completely as in a car, whereas on sports and racing motorcycles the main function is reducing drag when the rider</span>
                    </div>

                   <div className="container">
                       <div className="row">
                       <div class="col-lg-4 col-sm-12 text-center">
                            <h1> <FontAwesomeIcon className='fs-1 text-danger' icon={faFlag} /></h1>
                            <h2 className='fs-3 text-warning fw-bold'>25+</h2>
                            <h1 className='fs-1 fw-bold'>Country</h1>
                        </div>
                        <div class="col-lg-4 col-sm-12 text-center">
                            <h1> <FontAwesomeIcon className='fs-1 text-danger' icon={faHandHoldingHand} /></h1>
                            <h2 className='fs-3 text-warning fw-bold'>100+</h2>
                            <h1 className='fs-1 fw-bold'>Partnership</h1>
                        </div>
                        <div class="col-lg-4 col-sm-12 text-center">
                            <h1> <FontAwesomeIcon className='fs-1 text-danger' icon={faMessage} /></h1>
                            <h2 className='fs-3 text-warning fw-bold'>500+</h2>
                            <h1 className='fs-1 fw-bold'>Communication</h1>
                        </div>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;