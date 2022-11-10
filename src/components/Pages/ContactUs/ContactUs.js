import React from 'react';
import Swal from 'sweetalert2';

const ContactUs = () => {

    const handleContactUs = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const information = {name, email};
        if(information){
            Swal.fire(
                'Awesome!',
                "You'll be contacted by us very soon!",
                'success'
              )
            form.reset();
        }
    }

    return (
        <div>
                   <div className="hero min-h-screen bg-base-200">
  <div className="">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Contact Us</h1>
      <p className="py-6">Give us your information, you'll be contacted by us very soon!</p>
    </div> 
    <form onSubmit={handleContactUs} className="card  w-full max-w-sm mx-auto shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name='name' placeholder="your name" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input type="email" name='email' placeholder="your email" className="input input-bordered" required/>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-cyan-800">Send the information</button>
        </div>
      </div>
    </form>
  </div>
</div>
        </div>
    );
};

export default ContactUs;