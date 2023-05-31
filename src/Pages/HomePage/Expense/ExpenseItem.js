import React, { useContext } from "react";
import { Container, Row, Button } from "react-bootstrap";
import CreateExpenseCtx from "../../../Store/ExpenseContext/Create-ExpeseCtx";
import { useDispatch } from "react-redux";
import { expenseAction } from "../../../ReduxStore/Expense";

const ExpenseItem = (props) => {
  const dispatch = useDispatch();
  const ExpCtx = useContext(CreateExpenseCtx);
  let email = localStorage.getItem("email");
  email = email.replace(/[^a-zA-Z0-9]/g, "");
  const Id = props.id;

  const deleteFromFireBase = async () => {

    try {
      const response = await fetch(
        `https://expense-data-11e4b-default-rtdb.firebaseio.com/expense-${email}/${Id}.json`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("delete OK");
        console.log("Expense successfuly deleted");
        dispatch(expenseAction.totalExpenseAmount())
      } else {
        console.log("delete not OK");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteHandler = () => {
    // ExpCtx.deleteExpense(props.expense, props.description, props.category);
    dispatch(expenseAction.deleteExpense(props.expense))
    dispatch(expenseAction.totalExpenseAmount());
    deleteFromFireBase();
  };
  
  
  
  
  const editHandler = () => {
    dispatch(expenseAction.deleteExpense(props.expense))
    props.editExpense(
      props.expense,
      props.description,
      props.category,
      props.id
    );
    // editOnFireBase();
  };

  return (
    <Container className="d-flex justify-content-between">
      <li>
        {props.expense}-{props.description}-{props.category}
        <Button className="mx-3" onClick={deleteHandler} variant="outline-danger" size="sm">
          Delete
        </Button>
        <Button className="mx-3" onClick={editHandler} variant="outline-warning" size="sm" >
          Edit
        </Button>
      </li>
    </Container>
  );
};

export default ExpenseItem;
