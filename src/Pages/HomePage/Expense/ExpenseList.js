import React,{ } from "react";
import { Button, Card, Container } from "react-bootstrap";

import ExpenseItem from "./ExpenseItem";
import { useSelector } from "react-redux";
import { type } from "@testing-library/user-event/dist/type";

const ExpenseList = (props) => {
  
  const dataFromRedux = useSelector((state) => state.expense.expenseData);

  const downloadExpensesHandler = () => {
    console.log(dataFromRedux)
    const data = [];
    dataFromRedux.map(item => {
      const obj = {expense: item.expense,description:item.description,category:item.category}
      const dataInStrings = JSON.stringify(obj);
      data.push(dataInStrings);
      // console.log(convertedData);
    })
   
    const blob1 = new Blob(data,{type:"text/txt"})
    let link = document.getElementById("download");
    link.href = URL.createObjectURL(blob1);
  };
  
 

  return (
    <Card className="mb-3">
      <Card.Body>
        {dataFromRedux.map((item) => {
          // console.log(item);
          return (
            <ExpenseItem
              key={Math.random()}
              id={item.id}
              expense={item.expense}
              description={item.description}
              category={item.category}
              editExpense={props.editExpense}
            />
          );
        })}
      </Card.Body>
      <Container className="mb-2 text-center">
        {/* <Button onClick={downloadExpensesHandler} variant="outline-info">DownLoad Expenses</Button> */}
        <a id="download" download="file1.txt"  onClick={downloadExpensesHandler}>
          download Expenses
        </a>
      </Container>
    </Card>
  );
};

export default ExpenseList;
