import React from 'react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const AddServices = () => {

    const handleAddServiceSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const price = form.price.value;
        const description = form.description.value;
        const service = {
            title, img, price, description
        }
        fetch('https://capture-the-world-server.vercel.app/allServices', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if (data.acknowledged){
                Swal.fire(
                    'Great!',
                    "You've added the service successfully!",
                    'success'
                  )
                form.reset();
            }
        })
    }

    return (
        <div>
             <Helmet>
                <title>Add Services</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
  <div className="">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Add your service</h1>
      <p className="py-6">If you want, you can easily add your own services by filling out the form</p>
    </div> 
    <form onSubmit={handleAddServiceSubmit} className="card  w-full max-w-sm mx-auto shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" name='title' placeholder="title" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input type="text" name='img' placeholder="image url" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" name='price' placeholder="€ price" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" name='description' placeholder="description" className="input input-bordered" required/>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-cyan-800">Add Service!</button>
        </div>
      </div>
    </form>
  </div>
</div>
        </div>
    );
};

export default AddServices;