import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../UserContext/UserContext';

const SignUp = () => {

const {signUp} = useContext(AuthContext);

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
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage)
        // ..
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
    </div>
    <div className="form-control mt-6">
      <button className="btn bg-cyan-800">Sign Up</button>
    </div>
  </div>
</div>
</div>
</form>
    </div>
    );
};

export default SignUp;