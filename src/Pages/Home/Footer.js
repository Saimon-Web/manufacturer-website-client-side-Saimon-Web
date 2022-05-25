import React from 'react';
import './Footer.css'
import logo from '../../images/logo.webp'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow,faEnvelope} from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <div className=' container-fluid bg-secondary py-12 px-12'>
            <div className="row p-5">
                <div className="col-lg-4 col-sm-12 mt-5">
                 <img src={logo} alt="" />
                 <p>We provide everything you need to build an amazing dealership website developed especially for car sellers dealers or auto motor retailers.</p>
                 <p><FontAwesomeIcon className='fs-5 text-danger' icon={faLocationArrow}></FontAwesomeIcon><span>  220E Front St. Burlington NC 27215</span></p>
                 <p><FontAwesomeIcon  className='fs-6 text-danger' icon={faEnvelope}></FontAwesomeIcon>  support@example.com</p>
                </div>
                <div className="col-lg-4 col-sm-12 mt-5 footlink">
                    <h2 className='text-danger fs-3 fw-bold'>Useful Links</h2>
                 <Link to='/'>Manage Item</Link>
                 <Link to='/'>Add Item</Link>
                 <Link to='/'>My Item</Link>
                 <Link to='/'>Blog</Link>
                </div>
                <div className="subfoot mt-5 col-sm-12 col-lg-4">
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;