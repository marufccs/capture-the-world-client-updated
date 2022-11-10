import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../UserContext/UserContext';
import IndividualReview from './IndividualReview';

const MyReviews = () => {
    const myReviews = useLoaderData();
    const [reviews, setReviews] = useState(myReviews)

    const handleDelete = (id) => {
        const confirmation = window.confirm('Are you sure you want to delete this review?')
        if(confirmation){
            fetch(`http://localhost:5000/reviews/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('user deleted successfully')
                    const remaining = reviews.filter(singleReview => singleReview._id !== id);
                        setReviews(remaining);
                }
            })
        }
        
    }
    console.log(reviews);

    const {loading} = useContext(AuthContext);
    if(loading){
        return <button className="btn loading">loading</button>
      }

    return (
        <div>
            <Helmet>
                <title>My Reviews</title>
            </Helmet>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            {
                reviews.map(myReview => <IndividualReview key={myReview._id} myReview={myReview} handleDelete={handleDelete}></IndividualReview>)
            }
            </div>
            
        </div>
    );
};

export default MyReviews;