import React from "react";
import { Form, Button } from "react-bootstrap";
import "../css/Login.css";

const Login = ({ onLogin, setLogInEmail, setLogInPassword }) => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    onLogin(); // Call the onLogin function passed as a prop
  };

  return (
    <div>
      <h1>OnlyBeats</h1>
      <div className="mainStyle">
        <Form onSubmit={handleSubmit} className="formStyle">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="formLabel">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="inputForm"
              onChange={(event) => {
                setLogInEmail(event.target.value);
                console.log(event.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="formLabel">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className="inputForm"
              onChange={(event) => {
                setLogInPassword(event.target.value);
                console.log(event.target.value);
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
