import React from 'react'
import { Button, Form , Container ,Row, Col } from 'react-bootstrap'

export default function LoginTask(props) {
    return (
        <div>
<Container>
  <Row className="justify-content-md-center mt-5">
    <Col xs lg="6">
    {props.isLogged
        ? <h3 className="text-center">Welcome {props.username}</h3>
        : <h3 className="text-center">Please Log in </h3>
      }
    <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control 
    type="email" 
    placeholder="Enter email" 
    onChange={props.changeUsernameHandler}
    />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control 
    type="password" 
    placeholder="Password"
     onChange={props.changePasswordHandler}
    />
  </Form.Group>

  {props.isLogged
        ?   <Button variant="primary" type="submit" onClick={props.logOut}>
        Log out
      </Button>
        :   <Button variant="primary" type="submit" onClick={props.checkIsTrue}>
        Log in
      </Button>
      }

    </Col>
  </Row>
</Container>

        </div>
    )
}
