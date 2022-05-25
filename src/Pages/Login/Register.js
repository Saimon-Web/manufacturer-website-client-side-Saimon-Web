import { updateProfile } from 'firebase/auth';
import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

import useToken from '../../hooks/useToken';
const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, nerror] = useUpdateProfile(auth);
    const [token]=useToken(user ||guser)
   if(token){
       navigate('/')
       console.log(user)
   }
    let signerror;

    if (error || gerror) {
        signerror = <p className='text-danger'>{error?.message}</p>
    }
    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
    };
    return (
        <div class="card mt-5 mx-auto">
            <h2 className='text-warning mx-auto fs-4'>Sign In Your Account</h2>
            <div class="card-body ">

                <form className='w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>

                  <div>
                  <label class="form-label text-start"> Name</label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        class="form-control"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }          
                        })}
                    />
                    <label class="label">
                        {errors.name?.type === 'required' && <span class="label-text-alt text-red">{errors.name.message}</span>}  
                    </label>
                  </div>


                 <div>
                        
                    <label class="form-label text-start">Email address</label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        class="form-control"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid email'
                            }
                        })}
                    />
                    <label class="label">
                        {errors.email?.type === 'required' && <span class="label-text-alt text-red">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span class="label-text-alt text-red">{errors.email.message}</span>}
                    </label>

                 </div>


                  <div>
                  <label class="form-label text-start">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        class="form-control"
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'pasword is Required'
                            },
                            minLength: {
                                value: 6,
                                message: 'minimum 6 characters or longer'
                            }
                        })}
                    />
                    <label class="label">
                        {errors.password?.type === 'required' && <span class="label-text-alt text-red">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span class="label-text-alt text-red">{errors.password.message}</span>}


                    </label>
                  </div>

                   <div>
                   <input className='btn btn-warning mt-5 w-50 ' type="submit" value='Sign up' />
                   </div>
                </form>
                {signerror}
                <p className='mt-5'>Already account in lukas? <span className='text-warning'><Link to='/signin'>Signin</Link></span></p>
                <div class="mt-5 ">OR</div>
                <button onClick={() => signInWithGoogle()} className='btn btn-warning'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Register;