import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import readDataNew from '../utils/readDataNew'
import updateData from '../utils/updateData'

const EditFavBlogs = (props) => {
  
  const [ state, setState ] = readDataNew("favorite_blog", `${props.match.params.id}`)
  const [ editData ] = updateData("favorite_blog", props)

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

  if ( state === null ) {
    return <div>Loading...</div>
  }

  return (
    <React.Fragment>
      <Container>
        <Row className="mb-4">
          <Col>
            <Form>
              <Form.Group controlId="fav_blogs">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                  type="text" 
                  name="fav_blogs" 
                  value={ state.fav_blogs || '' } 
                  onChange={ handleInputChange } 
                  placeholder="Enter fav_blogs" />
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

export default EditFavBlogs;