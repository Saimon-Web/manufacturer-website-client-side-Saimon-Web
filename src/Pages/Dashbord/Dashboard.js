import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import Useadmin from '../../hooks/Useadmin';


const Dashboard = () => {
    const [user]=useAuthState(auth);
    // console.log(user?.email)
    // console.log(user)
    const [admin]=Useadmin(user);
    console.log(admin)
    return (
        <div class="d-flex flex-column flex-lg-row h-lg-full bg-light">
    
    <nav class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
        <div class="container-fluid">
           
            <button class="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        
         
            <div class="navbar-user d-lg-none">
               
                <div class="dropdown">
                
                    <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div class="avatar-parent-child">
                            <img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar- rounded-circle"/>
                            <span class="avatar-child avatar-badge bg-success"></span>
                        </div>
                    </a>
                 
                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                        <a href="#" class="dropdown-item">Profile</a>
                        <a href="#" class="dropdown-item">Settings</a>
                        <a href="#" class="dropdown-item">Billing</a>
                        
                    </div>
                </div>
            </div>
         
            <div class="collapse navbar-collapse" id="sidebarCollapse">
            
                <ul class="navbar-nav">
    
                  
               
                    <hr class="navbar-divider my-5 opacity-20"/>
                    <li class="nav-item">
                        <Link to='/dashboard'>My Profile</Link>
                    </li>
                    <hr class="navbar-divider my-5 opacity-20"/>
                  
                   {
                       admin?<>
                           
                    <li class="nav-item">
                        <Link to='/dashboard/makeadmin'>Make Admin</Link>
                    </li>
                    <hr class="navbar-divider my-5 opacity-20"/>
                    <li class="nav-item">
                        <Link to='/dashboard/manageproduct'>Manage Products</Link>
                    </li>
                    <hr class="navbar-divider my-5 opacity-20"/>
                    <li class="nav-item">
                    <Link to='/dashboard/addproduct'>Add a Product</Link>
                    </li>
                    <hr class="navbar-divider my-5 opacity-20"/>
                    <li class="nav-item">
                    <Link to='/dashboard/allorder'>Manage All Orders</Link>
                    </li>
                  
                    </>:
                    <> <li class="nav-item">
                    <Link to='/dashboard/myorder'>My Orders</Link>
                </li>
                <hr class="navbar-divider my-5 opacity-20"/>
                <li class="nav-item">
                        <Link to='/dashboard/myreview'>Add a Review</Link>
                    </li></>
                   }
                    
                 
                </ul>
              
                <hr class="navbar-divider my-5 opacity-20"/>
               
                
           
                <div class="mt-auto"></div>
            
              
            </div>
        </div>
    </nav>

    <div>
    <Outlet></Outlet>
    </div>
</div>
    );
};

export default Dashboard;