import React, { useEffect, useState } from 'react';

import ReviewItem from '../ReviewItem/ReviewItem';


const Review = () => {
   
   const [reviews, setReviews]=useState([]);
   useEffect( ()=>{
       fetch('data.json')
       .then(res=>res.json())
       .then(data=> setReviews(data))

       },[])
   
    return (
        <div>
           {reviews.map(view => <ReviewItem key={view.id} view={view} ></ReviewItem>)} 
         
           

        </div>
    );
};

export default Review;