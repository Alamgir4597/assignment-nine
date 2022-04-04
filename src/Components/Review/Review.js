import React, { useEffect, useState } from 'react';
import useReview from '../../hooks/useReview';

import ReviewItem from '../ReviewItem/ReviewItem';


const Review = () => {
   
   const [reviews, setReviews]=useReview();
  
   
    return (
        <div>
           {reviews.map(view => <ReviewItem key={view.id} view={view} ></ReviewItem>)} 
         
           

        </div>
    );
};

export default Review;