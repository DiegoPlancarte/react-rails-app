import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import readData from '../utils/readData'
import updateData from '../utils/updateData'

const EditBlog = (props) => {
  
  const [ state, setState ] = readData("blogs", `${props.match.params.id}`)
  const [ editData ] = updateData("blogs", `${props.match.params.id}`, props)

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
              <Form.Group controlId="body">
                <Form.Label>Body</Form.Label>
                <Form.Control 
                  type="textarea" 
                  name="body" 
                  value={ state.body || '' } 
                  onChange={ handleInputChange }  
                  placeholder="Enter body" />
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

export default EditBlog;