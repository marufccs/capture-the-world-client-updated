import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../UserContext/UserContext';
import IndividualReview from './IndividualReview';

const MyReviews = () => {
    const myReviews = useLoaderData();
    const [reviews, setReviews] = useState(myReviews)

    //Sweet Alert
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })

    const handleDelete = (id) => {
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to undo this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been successfully deleted.',
                'success'
              )
              fetch(`https://capture-the-world-server.vercel.app/reviews/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    const remaining = reviews.filter(singleReview => singleReview._id !== id);
                        setReviews(remaining);
                }
            })
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                "Your file hasn't been deleted :)",
                'error'
              )
            }
          })       
    }

    const {loading} = useContext(AuthContext);
    if(loading){
        return <button className="btn loading">loading</button>
      }

    return (
        <div>
            <Helmet>
                <title>My Reviews</title>
            </Helmet>
            {
                reviews.length > 0?
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                {
                    reviews.map(myReview => <IndividualReview key={myReview._id} myReview={myReview} handleDelete={handleDelete}></IndividualReview>)
                }
                </div>
                :
                 <div className='mx-auto my-72'>
                     <h3 className='text-cyan-800 text-6xl mb-24'>Oops! No Reviews found!</h3>
                     <h4 className='text-4xl'>Click <Link className='text-cyan-800' to='/services'>here</Link> to add a review</h4>
                </div>
            }
           
        </div>
    );
};

export default MyReviews;