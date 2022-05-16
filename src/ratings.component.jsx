import React from 'react';

function Ratings(props) {
  let ratings = [];
  for (let index = 0; index < props.rating; index++) {
    ratings.push(
      <span style={{ color: 'orange' }} key={index}>
        <i className="fa-solid fa-star"></i>
      </span>
    );
  }
  return <p>{ratings}</p>;
}

export default Ratings;
