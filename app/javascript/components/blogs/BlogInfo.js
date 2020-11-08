import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom"
import ReadData from '../utils/ReadData'

const BlogInfo = (props) => {

  const [ state ] = ReadData("blogs", `${props.match.params.id}`)

  const deleteBlog = ()=> {
		return fetch(`/blogs/${props.match.params.id}` ,{
			headers: {
        'X-CSRF-TOKEN': document.getElementsByName('csrf-token')[0].content
      },
      method: 'DELETE'
		})
		.then((response)=> {
			if(response.ok){
        props.history.push('/allblogs')
			}
		})
  }

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
      <Button onClick={ deleteBlog } className="btn btn-danger" >Delete Blog</Button>
      }
    </React.Fragment>
  );
};

export default BlogInfo;