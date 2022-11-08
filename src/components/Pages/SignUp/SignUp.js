import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../UserContext/UserContext';
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';

const SignUp = () => {

const {signUp, signUpWithGoogle} = useContext(AuthContext);

const [error, setError] = useState('');
//sign up with email and password
const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    signUp(email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        Swal.fire(
            'Great!',
            "You've been registered successfully!",
            'success'
          )
        form.reset();
        setError(' ');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
        // ..
      });
}

//sign up with google
const handleGoogle = () => {
signUpWithGoogle()
.then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

    return (
        <div>
        <form onSubmit={handleSubmit} className="hero min-h-screen bg-base-200">
<div className="w-96 h-max">
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <div className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
      <label className="label">
        <Link className='text-cyan-800' to='/signin'><p>Already registered? Log in right now!</p></Link>
      </label>
        <p className='text-amber-600'>{error}</p>
    </div>
    <div className="form-control mt-6">
      <button className="btn bg-cyan-800">Sign Up</button>
    </div>
    <div className="form-control mt-6">
      <button onClick={handleGoogle} className="btn btn-ghost"><FaGoogle className='mr-2'></FaGoogle>Sign Up with Google Instead</button>
      </div>
  </div>
</div>
</div>
</form>
    </div>
    );
};

export default SignUp;