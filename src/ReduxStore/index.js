import { configureStore ,} from "@reduxjs/toolkit";
import AuthReducer from './Auth';
import ExpenseReducer from './Expense';
import ThemeReducer from './Theme'


const Store = configureStore({
    reducer: {
        authentication: AuthReducer,
        expense: ExpenseReducer,
        theme : ThemeReducer,
    },
});


export default Store;