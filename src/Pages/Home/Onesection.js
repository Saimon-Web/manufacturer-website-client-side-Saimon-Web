import React from 'react';
import iconone from '../../images/icon-1.webp'
import icontwo from '../../images/icon-2.webp'
import iconthree from '../../images/icon-3.webp'
const Onesection = () => {
    return (
        <div>
            <div class="shadow-xl mb-24 mt-12 pt-24 pb-24 py-24">
                <div class="container bg-light  max-w-screen-xl">

                    <div class="row justify-content-center text-md-center mb-12">
                        <div class="col-lg-7">
                            <h1 class="ls-tight font-bolder mb-5">
                                FLASH DEALS
                            </h1>
                            <h5 class="ls-tight font-bolder mb-5">
                                HURRY UP AND GET 25% DISCOUNT
                            </h5>
                        </div>
                    </div>

                    <div class="row g-16 g-md-24">
                        <div class="col-md-4 mb-5 mb-md-0">
                            <div class="d-flex justify-content-center">
                                <a href="#" class="avatar avatar-xl ">
                                    <img alt="..." src={iconone}/>
                                </a>
                            </div>
                            <h5 class="h4 font-semibold mb-2">Free Home Deliverye</h5>
                            <p class="lh-relaxed">
                            Provide free home delivery for all product over $100
                            </p>
                        </div>
                        <div class="col-md-4 mb-5 mb-md-0">
                            <div class="d-flex justify-content-center">
                                <a href="#" class="avatar avatar-xl ">
                                    <img alt="..." src={icontwo}/>
                                </a>
                            </div>
                            <h5 class="h4 font-semibold mb-2">Quality Products</h5>
                            <p class="lh-relaxed">
                            We ensure our product quality all times
                            </p>
                        </div>
                        <div class="col-md-4 mb-5 mb-md-0">
                            <div class="d-flex justify-content-center">
                                <a href="#" class="avatar avatar-xl ">
                                    <img alt="..." src={iconthree}/>
                                </a>
                            </div>
                            <h5 class="h4 font-semibold mb-2">Online Support</h5>
                            <p class="lh-relaxed">
                            To satisfy our customer we try to give support online
                            </p>
                        </div>
                      
                     
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Onesection;