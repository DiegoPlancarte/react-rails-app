import React from 'react';
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"
import useRead from '../hooks/useRead'

const GetProjects = () => {

  const [ state ] = useRead("projects", "")

  if (state === null) {
    return <div>Loading...</div>
  }

  return (
    <React.Fragment>
      <Link to='/createproject'><Button>Create Blog</Button></Link>
      { state.map((v,i) => {
        return(
          <div key={i}>
            <Link to={`/projectinfo/${v.id}`}>{v.title}</Link>
            <p>{v.description}</p>
          </div>
        )
      })}
    </React.Fragment>
  );
};

export default GetProjects;