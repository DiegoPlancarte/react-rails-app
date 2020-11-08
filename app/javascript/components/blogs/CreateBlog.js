import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import createData from '../utils/createData';

const CreateBlog = (props) => {

  const [ newData ] = createData('blogs', props)
  const [ state, setState ] = useState({})

  const handleSubmit = (event) => {
    if(event) {
      event.preventDefault();
    }
    newData(state)
  }

  const handleInputChange = (event) => {
    event.persist();
    setState(state=>({...state, user_id: userId() }))
    setState(state => ({...state, [event.target.name]: event.target.value}));
  }

  const userId = () => {
    if (props.current_user) {
      return props.current_user.id
    } else {
      return null
    }
  }

  return (
    <React.Fragment>
      <Container>
        <Row className="mb-4">
          <Col>
            <Form>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" value={ state.title || '' } onChange={ handleInputChange } placeholder="Enter title" />
              </Form.Group>
              <Form.Group controlId="body">
                <Form.Label>Body</Form.Label>
                <Form.Control type="textarea" name="body" value={ state.body || '' } onChange={ handleInputChange }  placeholder="Enter body" />
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

export default CreateBlog;