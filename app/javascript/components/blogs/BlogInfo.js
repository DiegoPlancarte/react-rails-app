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

  return (
    <React.Fragment>
      <h1>{state.title}</h1>
      <p>{state.body}</p>
      <Link to={`/editblog/${state.id}`}><Button>Edit Blog</Button></Link>
      <Button onClick={ deleteBlog } className="btn btn-danger" >Delete Blog</Button>
    </React.Fragment>
  );
};

export default BlogInfo;