import React, { useState, useEffect } from "react";
import CreateExpneseCtx from "./Create-ExpeseCtx";
import { useDispatch } from "react-redux";
import { expenseAction } from "../../ReduxStore/Expense";

const ExpenseProvider = ({ children }) => {
  

  // const deleteExpenseHandler = (exp, des, cat) => {
  //   setExpense((prev) => {
  //     const newList = prev.filter((item) => {
  //       return item.expense !== exp;
  //     });
  //     return newList;
  //   });
  //   setTimeout(() => {
      
  //     dispatch(expenseAction.allExpense(expense));
  //   },1000)
  // };

  // const editExpenseHandler = (Identifier) => {
  //   // console.log(Identifier);
  //   setEditId(Identifier);
  // };

  // const addExpenseHandler = (item) => {
  //   setExpense((prev) => {
  //     return [item, ...prev];
  //   });
  // };

  // const getDataFromFireBase = async () => {
  //   let email = localStorage.getItem("email");
  //   email = email.replace(/[^a-zA-Z0-9]/g, "");
  //   // console.log(email);
  //   try {
  //     const result = await fetch(
  //       `https://expense-data-11e4b-default-rtdb.firebaseio.com/expense-${email}.json`
  //     );

  //     if (result.ok) {
  //       console.log("get data   OK");
  //       const data = await result.json();
  //       let dataInArray = Object.values(data);
  //       let allKeys = Object.keys(data);
  //       // console.log(dataInArray)

  //       let expenses = [];

  //       dataInArray.map((item, index) => {
  //         const temp = { ...item, id: allKeys[index] };
  //         expenses.push(temp);
  //       });

  //       //  console.log(expenses);
  //       // dispatch(expenseAction.allExpense(expenses));
  //       // dispatch(expenseAction.totalExpenseAmount());

  //       setExpense(expenses);
  //     } else {
  //       console.log("data stored not  OK");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const expenseContext = {
    // expenseItem: expense,
    // addExpense: addExpenseHandler,
    // deleteExpense: deleteExpenseHandler,
    // editKey : editId,
    // editExpense: editExpenseHandler,
    // getDataFromFireBase: getDataFromFireBase,
  };
  return (
    <CreateExpneseCtx.Provider value={expenseContext}>
      {children}
    </CreateExpneseCtx.Provider>
  );
};

export default ExpenseProvider;
