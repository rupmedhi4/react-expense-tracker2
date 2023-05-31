import React, { useState, useEffect, useContext } from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ExpenseForm from "./Expense/ExpenseForm";
// import Background from "./Background";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../../ReduxStore/Auth";
import { expenseAction } from "../../ReduxStore/Expense";
import { fetchExpenses } from "../../ReduxStore/Expense";
import CreateExpenseCtx from "../../Store/ExpenseContext/Create-ExpeseCtx";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(authAction.Logintoken(localStorage.getItem("token")));
  dispatch(expenseAction.totalExpenseAmount());
  const tokenFromRedux = useSelector((state) => state.authentication.userToken);

  

  const totalExpenseFromRedux = useSelector(
    (state) => state.expense.totalExpense
  );
  console.log(totalExpenseFromRedux);

  useEffect(() => {
    dispatch(fetchExpenses());
    // dispatch(expenseAction.totalExpenseAmount());

  }, []);

  //  console.log(totalExpenseFromRedux);

  // console.log(tokenFromRedux);
  const verifyEmailOnFireBase = async () => {
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBnUt6SmiCjCExXs2Pb4ir_uwH5us-ho2w",
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "VERIFY_EMAIL",
            idToken: tokenFromRedux,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("email verified Ok");
        const data = await response.json();
        console.log(data);
      } else {
        console.log("email verified not Ok");
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Container fluid className=" d-flex justify-content-around mt-4">
        <Row>
          <Col md={4}>
            <h1>Welcome to Expense Tracker</h1>
          </Col>
          <Col md={4}>
            <Button
              className="ms-5"
              onClick={verifyEmailOnFireBase}
              variant="warning"
            >
              Verify Email Id
            </Button>
          </Col>

          <Col md={4}>
            <h5 className="">
              Your Profile is Incomplete
              <Link to="/userdetails">Complete now</Link>
            </h5>
          </Col>
        </Row>
      </Container>

       
      {totalExpenseFromRedux >= 10000 && <Row lg={6} className=" mt-3 d-flex justify-content-center">
        <Button
          variant="info"
          style={{ color: "white", fontWeight: "bolder" }}
        >
          Activate Premium
        </Button>
      </Row>}
      

      <Row className="mt-3">
        <ExpenseForm />
      </Row>
      {/* <Background /> */}
    </Container>
  );
};

export default Home;
