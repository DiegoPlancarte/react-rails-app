import React from 'react';
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"
import readDate from '../utils/readDataNew'

const FavBlogs = (props) => {

  const [ state, error ] = readDate("blog", "")

  if (!state) {
    return <div>Loading...</div>
  }

  const my_blogs = state.filter((a,i)=>
  {return(a.user_id === props.current_user.id)})
  
  return (
    <React.Fragment>
      <Link to='/createblog'><Button>Create Blog</Button></Link>
      {my_blogs.map((v,i) => {
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

export default FavBlogs;