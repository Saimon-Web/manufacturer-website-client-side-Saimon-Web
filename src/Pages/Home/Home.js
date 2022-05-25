import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Onesection from './Onesection';
import Products from './Products';
import Review from './Review';
import Reviews from './Reviews';
import Summary from './Summary';
import Twosection from './Twosection';


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Products></Products>
         <Onesection></Onesection>
        <Reviews></Reviews>
         
         <Summary></Summary>
         <Twosection></Twosection>
         <Footer></Footer>
        </div>
    );
};

export default Home;