import React from 'react';
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"
import readDate from '../utils/readData'

const GetBlogs = () => {

  const [ state ] = readDate("blog", "")

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