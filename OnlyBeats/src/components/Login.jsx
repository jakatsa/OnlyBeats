import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import "../css/Login.css";
const Login = ({ redirectToNavBar }) => {
  const [userCredentials, setUserCredentials] = useState({});

  function handleCredentials(e) {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  }

  function handleLogin(e) {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then(() => {
        console.log("Login successful");
        // Invoke the callback function to redirect to NavBar
        redirectToNavBar();
      })
      .catch((error) => {
        console.error("Error signing in:", error);
        // Handle login error
      });
  }

  function handlePasswordReset() {
    const email = prompt("Enter email");
    sendPasswordResetEmail(auth, email);
    alert("Email sent");
  }

  return (
    <div>
      <h1>OnlyBeats</h1>
      <div className="mainStyle">
        <Form className="formStyle">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="formLabel" style={{ width: "10px" }}>
              Email address
            </Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              className="inputForm"
              onChange={handleCredentials}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="formLabel">Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              className="inputForm"
              onChange={handleCredentials}
            />
          </Form.Group>
          <Button onClick={handleLogin} variant="primary" type="submit">
            Submit
          </Button>
          <p onClick={handlePasswordReset} className="text-white">
            Forgot password?
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
