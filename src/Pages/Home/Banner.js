import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div>
            
<section class=" backgroundimg position-relative pt-48 pb-40 bg-dark bg-cover bg-size--cover">
   
    <span class="position-absolute top-0 start-0 w-full h-full bg-dark opacity-80"></span>

    <div class="container-lg max-w-screen-xl position-relative overlap-10 text-center text-lg-start pt-5 pb-5 pt-lg-6">
        <div class="row row-grid align-items-center ">
            <div class="col-lg-8 text-sm-center text-lg-start">
             
                <h1 class=" ls-tight text-white mb-2 ">
                  New Technology & Build
                </h1>
                <h1 class=" heading  ls-tight  font-bolder display-5 text-white mb-2 ">
               WHEELS AND TIRE COLLECTION
                </h1>
              
                <p class="lead text-white   text-opacity-80 mb-10 w-lg-75 w-full">
                    For over 5 years, we pride ourselves on our commitment to excellence, <br /> as well as our ability to deliver for our customers.
                    </p>
               
               
            </div>
        </div>
    </div>
</section>
        </div>
    );
};

export default Banner;