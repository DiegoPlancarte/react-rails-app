import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom"

const BlogInfo = (props) => {

  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(`/blogs/${props.match.params.id}`)
    .then((response)=>{
      if(response.status === 200){
          return(response.json())
        }
      })
      .then((state) => {
        setState(state);
      })
  }, []);

  return (
    <React.Fragment>
      <h1>{state.title}</h1>
      <p>{state.body}</p>
      <Link to={`/editblog/${state.id}`}><Button>Edit Blog</Button></Link>
    </React.Fragment>
  );
};

export default BlogInfo;