import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
<div className="w-96 h-max">
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <div className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" placeholder="name" className="input input-bordered" required/>
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" placeholder="email" className="input input-bordered" required/>
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" placeholder="password" className="input input-bordered" required/>
      <label className="label">
        <Link className='text-cyan-800' to='/signin'><p>Already registered? Log in right now!</p></Link>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn bg-cyan-800">Login</button>
    </div>
  </div>
</div>
</div>
</div>
    </div>
    );
};

export default SignUp;