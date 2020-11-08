import React, { useState, useEffect } from 'react';
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