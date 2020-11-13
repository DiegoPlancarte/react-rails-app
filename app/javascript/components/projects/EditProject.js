import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import useRead from '../hooks/useRead'
import useUpdate from '../hooks/useUpdate'

const EditProject = (props) => {
  
  const [ state, setState ] = useRead("projects", `${props.match.params.id}`)
  const [ editData ] = useUpdate("projects", `${props.match.params.id}`, props, `projectinfo/${props.match.params.id}`)
  
  if (state === null) {
    return <div>Loading...</div>
  }

  const handleSubmit = (event) => {
    if(event) {
      event.preventDefault();
    }
    editData(state)
  }

  const handleInputChange = (event) => {
    event.persist();
    setState(state => ({...state, [event.target.name]: event.target.value}));
  }

  return (
    <React.Fragment>
      <Container>
        <Row className="mb-4">
          <Col>
            <Form>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                  type="text" 
                  name="title" 
                  value={ state.title || '' } 
                  onChange={ handleInputChange } 
                  placeholder="Enter title" />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control 
                  type="textarea" 
                  name="description" 
                  value={ state.description || '' } 
                  onChange={ handleInputChange }  
                  placeholder="Enter description" />
              </Form.Group>
              <Button variant="primary" onClick={ handleSubmit } type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default EditProject;