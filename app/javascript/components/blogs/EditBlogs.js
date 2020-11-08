import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

const EditBlog = (props) => {
  
  const [ state, setState ] = useState({})

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

  const handleSubmit = (event) => {
    if(event) {
      event.preventDefault();
    }
    editBlog(state)
  }
  
  const handleInputChange = (event) => {
    event.persist();
    setState(state => ({...state, [event.target.name]: event.target.value}));
  }

  const editBlog = (blog)=> {
    return fetch (`/blogs/${props.match.params.id}`, {
      body: JSON.stringify(blog),
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.getElementsByName('csrf-token')[0].content
      },
      method: 'PUT'
    })
    .then ((response)=> {
      if (response.ok){
        return (
          props.history.push('/allblogs')
        )
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