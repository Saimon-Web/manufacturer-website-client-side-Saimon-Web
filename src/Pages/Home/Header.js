import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.webp'
const Header = () => {
    const [user]=useAuthState(auth);
    const navigate=useNavigate()
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
       navigate('/login')
      };
    return (
        <div>
             <nav class="navbar navbar-expand-lg navbar-light bg-white px-0 py-3">
                <div class="container-xl max-w-screen-xl">

                    <a class="navbar-brand" href="#">
                        <img src={logo} class="h-10" alt="..." />
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarCollapse">

                        <ul class="navbar-nav mx-lg-auto">
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to="dashboard"> Dashboard</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to="portfolio"> Portfolio</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to="blog"> Blog</Link>
                            </li>
                     
                            
                        </ul>
                        <Link class="nav-link" to="makeup">  <p className='text-warning fw-bold'>{user?.displayName}</p></Link>
                        <div class="navbar-nav ms-lg-4">
                       
                         {user?  <>
                        
                            <Link onClick={logout}  class="btn btn-sm btn-neutral w-full w-lg-auto" to="/signin">Sign Out</Link></> :
                            <Link  class="btn btn-sm btn-neutral w-full w-lg-auto" to="/signin">Sign in</Link>}
                        </div>

                      
                    </div>
                </div>
            </nav>
            <hr class="navbar-divider my-5 opacity-20"/>
        </div>
    );
};

export default Header;