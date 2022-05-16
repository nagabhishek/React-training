import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function PostDetails() {
  let { id } = useParams();
  let [thePost, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => setPost(response.data));
  }, [id]);

  return (
    <div>
      <h2>Post Details for {id}</h2>
      <h3>Title : {thePost.title}</h3>
      <h3>Body : {thePost.body}</h3>
    </div>
  );
}
