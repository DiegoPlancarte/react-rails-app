import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import useForm from '../utils/useForm';
import createData from '../utils/createData';
import useCreate from '../hooks/useCreate';

const CreateProject = (props) => {

  const [ createData, isLoading, error ] = useCreate( 'projects', props, 'allprojects')
  const [ state, handleInputChange ] = useForm(props)

  const handleSubmit = (event) => {
    if(event) {
      event.preventDefault();
    }
    createData(state)
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

export default CreateProject;