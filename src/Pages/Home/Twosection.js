import React from 'react';
import news from '../../images/newsletter-bg.webp'
const Twosection = () => {
    return (
        <div >
<div class="mt-12 mb-12 shadow pt-24 pb-32">
    <div class="container-lg max-w-screen-xl">

        <div class="row g-6 align-items-center">
            <div class="col-lg-7 mx-auto text-lg-center">
                
                <h1 class="ls-tight font-bolder fs-4 mb-7">
                SPECIAL OFFER FOR SUBSCRIPTION
                </h1>
                <h1 class="ls-tight font-bolder display-4 mb-7">
                GET INSTANT DISCOUNT FOR MEMBERSHIP
                </h1>
               
                <p class="lead mb-12">
                Subscribe our newsletter and all latest news of our
latest product, promotion and offers
                    </p>
                    
                <form class="w-2/3 mx-auto">
                    <div class="rounded px-2 py-2 border shadow">
                        <div class="row">
                            <div class="col">
                                <input type="email" name="email" class="form-control pl-3 shadow-none bg-transparent border-0" placeholder="Enter your email address"/>
                            </div>
                            <div class="col-auto">
                                <button type="submit" class="btn btn-block btn-dark">SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
            
        </div>
    );
};

export default Twosection;