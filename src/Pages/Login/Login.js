import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Loading';
import useToken from '../../hooks/useToken';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user || guser)
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (token) {
        navigate('/')
        // navigate(from, { replace: true });
    }
    if (loading || gloading) {
        return <Loading></Loading>
    }
    let loginerror;
    if (error || gerror) {
        loginerror = <p className='text-danger'>{error?.message}</p>
    }
    const onSubmit = data => {
        console.log(data)

        signInWithEmailAndPassword(data.email, data.password)
      
    };
    return (
        <div class="card mt-5 mx-auto">
            <h2 className='text-warning mx-auto fs-4'>Sign In Your Account</h2>
            <div class="card-body ">

                <form className='w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>

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
                        <input className='btn btn-warning mt-5 w-50 ' type="submit" value='SignIn' />
                    </div>
                </form>
                {loginerror}
                <p className='mt-5'>New to lukas? <span className='text-warning'><Link to='/register'>Signup</Link></span></p>
                <div class="mt-5 ">OR</div>
                <button onClick={() => signInWithGoogle()} className='btn btn-warning'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;