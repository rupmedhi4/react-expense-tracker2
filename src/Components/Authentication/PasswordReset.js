import React,{useRef} from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useHistory,Link } from "react-router-dom"


const PasswordReset = () => {
    const emailRef = useRef();
    const history = useHistory();


  const resetPassHandler = async (e) => {
    e.preventDefault();
      const enteredEmail = emailRef.current.value;
      console.log(enteredEmail);
      try {
         const response = await fetch(
           "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBnUt6SmiCjCExXs2Pb4ir_uwH5us-ho2w",
           {
             method: "POST",
             body: JSON.stringify({
                 requestType: "PASSWORD_RESET",
                 email : enteredEmail
             }),
             headers: {
               "Content-Type": "application/json",
             },
           }
          );
          
          if (response.ok) {
            console.log('reset Ok')
            setTimeout(() => {
               history.replace("/login");
            }, 3000)
             
            } else {
              console.log('reset not Ok')
          }
          
    } catch (err) {
      console.log(err);
    }
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
                  <h2 className="fw-bold mb-2 text-uppercase ">
                    Reset Password
                  </h2>
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

                      <div className="d-grid">
                        <Button
                          onClick={resetPassHandler}
                          variant="primary"
                          type="submit"
                        >
                          Send Link
                        </Button>
                      </div>
                      <Container className="d-flex justify-content-center mt-3">
                        <Link to="/login" className="text-primary fw-bold">
                          Login
                        </Link>
                      </Container>
                    </Form>
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

export default PasswordReset;
