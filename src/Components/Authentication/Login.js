import React, { useContext, useRef } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import CreateAuth from "../../Store/AuthContext/Create-Auth";
import {} from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../../ReduxStore/Auth";

const Login = () => {
  const AuthCtx = useContext(CreateAuth);
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();

  //redux work
  const dispatch = useDispatch();
  const authFromRedux = useSelector(
    (state) => state.authentication.isAuthenticated
  );
  const emailFromRedux = useSelector((state) => state.authentication.userEmail);
  const tokenFromRedux = useSelector((state) => state.authentication.userToken);
  console.log(authFromRedux);


  const loginOnFireBase = async (enteredEmail, enteredPassword) => {
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBnUt6SmiCjCExXs2Pb4ir_uwH5us-ho2w",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("LogIn OK");
        // console.log(" User has successfully Logged In");
        const data = await response.json();
        // console.log(data, data.idToken);
        dispatch(authAction.isLogin());
        dispatch(authAction.UserEmail(enteredEmail));
        dispatch(authAction.Logintoken(data.idToken));
        localStorage.setItem("token", data.idToken);
        localStorage.setItem("email", enteredEmail);
        history.replace("/home");

        // AuthCtx.logInOut();
      } else {
        // console.log("login not OK");
        alert("Invalid Authentication");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // console.log(email, password);
    loginOnFireBase(email, password);
    //Theme setUp in localStorage
    localStorage.setItem("theme", "ligthTheme");
    // dispatch(authAction.Logintoken());
  };

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Login</h2>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          ref={emailRef}
                          placeholder="Enter email"
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          ref={passwordRef}
                          required
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button
                          onClick={loginHandler}
                          variant="primary"
                          type="submit"
                        >
                          Login
                        </Button>
                      </div>
                    </Form>

                    <Container className="mt-2 d-flex-center">
                      <Link to="/resetPassword">reset Password</Link>
                    </Container>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Not Have an account?
                        <Link to="/signup" className="text-primary fw-bold">
                          SignUp
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
