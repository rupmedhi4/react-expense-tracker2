import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const intialExpenseState = {
  expenseData: [],
  totalExpense: 0,
  loading: false,
  error: false,
  editID: null,
};

const expenseSlice = createSlice({
  name: "expense",
  initialState: intialExpenseState,
  reducers: {
    allExpense(state, action) {
      // console.log(action.payload);
      state.expenseData = action.payload;
    },
    totalExpenseAmount(state) {
      //   console.log(state.totalExpense)
      state.totalExpense = state.expenseData.reduce((prev, curr) => {
        return prev + Number(curr.expense);
      }, 0);
      
    },
    deleteExpense(state, action) {
      const newList = state.expenseData.filter((item) => {
        return item.expense !== action.payload;
      });
      state.expenseData = newList;
      console.log("delete from redux");
    },
    addExpense(state, action) {
      state.expenseData = [action.payload, ...state.expenseData];
    },
    updateEditID(state, action) {
      state.editID = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchExpenses.pending, (state, action) => {
      state.loading = true;
      console.log("pending...");
    });
    builder.addCase(fetchExpenses.rejected, (state) => {
      state.error = true;
      console.log("rejected...");
    });
    builder.addCase(fetchExpenses.fulfilled, (state, action) => {
      let data = action.payload;
      let dataInArray = Object.values(data);
      let allKeys = Object.keys(data);
      // console.log(dataInArray)
      let expenses = [];
      dataInArray.map((item, index) => {
        const temp = { ...item, id: allKeys[index] };
        expenses.push(temp);
      });
      state.loading = false;
      state.expenseData = expenses;
      console.log(state.expenseData);

      state.totalExpense = state.expenseData.reduce((prev, curr) => {
        return prev + Number(curr.expense);
      }, 0);
    });
  },
});

let email = '';
if (localStorage.getItem("email") !== null) {
    email = localStorage.getItem("email");
    email = email.replace(/[^a-zA-Z0-9]/g, "");
}
// console.log(email);
export const fetchExpenses = createAsyncThunk("fetchExpenses", async () => {
  const response = fetch(
    `https://expense-data-11e4b-default-rtdb.firebaseio.com/expense-${email}.json`
  );

  const data = (await response).json();
  return data;
});
export const expenseAction = expenseSlice.actions;

export default expenseSlice.reducer;
