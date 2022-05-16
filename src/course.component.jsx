import React, { useState } from 'react';
import Ratings from './ratings.component';

function Course(props) {
  let [likes, setLikes] = useState(props.coursedetails.likes);
  let [dislikes, setDisLikes] = useState(0);

  return (
    <div className="col-md-3 my-1">
      <div className="card p-1">
        <img
          height="200px"
          src={props.coursedetails.imageUrl}
          alt={props.coursedetails.name}
          className="card-img-top"
        />
        <div className="card-body">
          <Ratings rating={props.coursedetails.rating} />

          <h4 className="card-title">{props.coursedetails.title}</h4>
          <h5 className="card-text">₹. {props.coursedetails.price}</h5>

          <button
            className="btn btn-primary mx-1"
            onClick={() => setLikes(likes + 1)}
          >
            {likes} <i className="fa-solid fa-thumbs-up"></i>
          </button>
          <button
            className="btn btn-warning mx-1"
            onClick={() => setDisLikes(dislikes + 1)}
          >
            {dislikes} <i className="fa-solid fa-thumbs-down"></i>
          </button>

          <button
            className="btn btn-danger mx-1"
            onClick={() => props.DeleteACourse(props.coursedetails.id)}
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Course;
