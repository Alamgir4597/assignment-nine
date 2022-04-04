import React from 'react';
import './ReviewItem.css';
const ReviewItem = (props) => {
    const { Name, Review, Rating} = props.view
    return (
        <div className='review-container'>
            <h1>{Name}</h1>  
            <p>Review: {Review}</p> 
            <p>Rating: {Rating}</p>
        </div>
    );
};

export default ReviewItem;