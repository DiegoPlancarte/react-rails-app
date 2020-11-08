import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

const CreateBlog = (props) => {

  const [ state, setState ] = useState({})

  const handleSubmit = (event) => {
    if(event) {
      event.preventDefault();
    }
    createBlog(state)
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

  const createBlog = (form) => {
    fetch(`/blogs`, {
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.getElementsByName('csrf-token')[0].content
      },
      method: 'POST'
    })
    .then((resp) => {
      if (resp.ok) {
        setState({})
        alert('Your blog has been created!')
      }
    })
    .catch((err) => {
      if (err) {
        console.log(err)
      }
    })
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