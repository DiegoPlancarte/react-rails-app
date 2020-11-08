import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom"
import readData from '../utils/readData'
import destroyData from '../utils/destroyData'

const BlogInfo = (props) => {

  const [ state ] = readData("blogs", `${props.match.params.id}`)
  const [ deleteData ] = destroyData("blogs", `${props.match.params.id}`, props)

  const creator = () => {
    return props.current_user.id === state.user_id
  }

  return (
    <React.Fragment>
      <h1>{state.title}</h1>
      <p>{state.body}</p>
      <p>{state.user_id}</p>
      { creator() &&
      <Link to={`/editblog/${state.id}`}><Button>Edit Blog</Button></Link>
      }
      { creator() &&
      <Button onClick={ deleteData } className="btn btn-danger" >Delete Blog</Button>
      }
    </React.Fragment>
  );
};

export default BlogInfo;