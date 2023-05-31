import React, { useContext } from "react";
import Header from "./Components/Header/Header";
import SignUp from "./Components/Authentication/SignUp";
import Login from "./Components/Authentication/Login";
import { Route,Switch, } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Pages/HomePage/Home";
import UserDetails from "./Components/Authentication/UserDetails/UserDetails";
import PasswordReset from "./Components/Authentication/PasswordReset";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";
import Error from "./Pages/ErrorPage/Error";
import './App.css';
import { themeAction } from "./ReduxStore/Theme";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme.currTheme);
  console.log(theme);
  

  return (
    <div className={`${theme}`}>
      <Header />
      <Switch>
        <PrivateRoute path="/" Component={Home} exact />
        <PrivateRoute  path="/home" Component={Home} exact />
        <PrivateRoute path="/userdetails" Component={UserDetails} exact />
        <PublicRoute path="/signup" Component={SignUp} exact />
        <PublicRoute path="/resetPassword" Component={PasswordReset} exact />
        <PublicRoute path="/login" Component={Login} exact />
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
