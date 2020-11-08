import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"

const GetBlogs = () => {

  const [state, setState] = useState([]);

  useEffect(() => {
    fetch('/blogs')
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
      <Link to='/createblog'><Button>Create Blog</Button></Link>
      { state.map((v,i) => {
        return(
          <div key={i}>
            <Link to={`/bloginfo/${v.id}`}>{v.title}</Link>
            <p>{v.body}</p>
          </div>
        )
      })}
    </React.Fragment>
  );
};

export default GetBlogs;