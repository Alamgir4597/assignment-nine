import React from 'react';

const HomeItem = (props) => {
    const { Name, Review, Rating} = props.view
    return (
        <div>
            <h4>Name: {Name}</h4>
            <p>Review: {Review}</p>
            <p>Rating: {Rating}</p>
        </div>
    );
};

export default HomeItem;