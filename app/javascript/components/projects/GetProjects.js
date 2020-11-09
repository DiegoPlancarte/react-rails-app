import React from 'react';
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"
import readDate from '../utils/readData'

const GetProjects = () => {

  const [ state ] = readDate("project", "")

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