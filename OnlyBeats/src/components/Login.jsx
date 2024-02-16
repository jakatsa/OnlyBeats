import React from "react";
import { Container } from "react-bootstrap";
const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=494ab72899794501b031b37168828296&response_type=code&redirect_uri=http://http://localhost:5173/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
const Login = () => {
  return (
    <div>
      <Container>
        <a href={AUTH_URL}>login</a>
      </Container>
    </div>
  );
};

export default Login;

/*import React from "react";?s
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

export default Login;*/
