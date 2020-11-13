import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom"
import useRead from '../hooks/useRead'
import useDelete from '../hooks/useDelete'

const ProjectInfo = (props) => {

  const [ state ] = useRead("project", `${props.match.params.id}`)
  const [ deleteData, isLoading, error ] = useDelete("projects", `${props.match.params.id}`, props, 'allprojects')

  if (state === null) {
    return <div>Loading...</div>
  }

  const creator = () => {
    return props.current_user.id === state.user_id
  }

  return (
    <React.Fragment>
      <h1>{state.title}</h1>
      <p>{state.description}</p>
      <p>{state.user_id}</p>
      { creator() &&
      <Link to={`/editproject/${state.id}`}><Button>Edit Project</Button></Link>
      }
      { creator() &&
      <Button onClick={ deleteData } className="btn btn-danger" >Delete Project</Button>
      }
    </React.Fragment>
  );
};

export default ProjectInfo;