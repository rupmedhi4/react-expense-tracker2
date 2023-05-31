import React,{useRef} from "react";
import { Container, Row, Col, Card, Form, Button, } from "react-bootstrap";
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

//https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
const SignUp = () => {
  const history = useHistory();
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPassRef = useRef();

    const signUpOnFireBase = async (enteredEmail, enteredPassword) => {
        try {
            const response = await fetch(
                "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBnUt6SmiCjCExXs2Pb4ir_uwH5us-ho2w",
                {
                    method: "POST",
                    body: JSON.stringify({
                        email: enteredEmail,
                        password: enteredPassword,
                        returnSecureToken: true
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (response.ok) {
                console.log('signUp OK')
                console.log(' User has successfully signed up')
              const data = await response;
              history.replace("/login");
                // console.log(data);
            } else {
                console.log('signUp not OK')
                alert("Invalid Authentication")
                
            }
        } catch (err) {
            console.log(err);
        }
    }


    const signUpHandler = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confPass = confirmPassRef.current.value;
        if (password !== confPass) alert('Password Not Matched');
        else signUpOnFireBase(email, password);
    }

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">SignUp</h2>
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

                      <Form.Group
                        className="mb-3"
                      >
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
                       
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          ref={confirmPassRef}
                          placeholder="Password"
                          required
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        
                      </Form.Group>
                      <div className="d-grid">
                        <Button
                          onClick={signUpHandler}
                          variant="primary"
                          type="submit"
                        >
                          SignUp
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                         Already Have an account?{" "}
                        <Link to="/login" className="text-primary fw-bold">
                          Login
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

export default SignUp;
