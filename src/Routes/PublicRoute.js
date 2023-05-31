import React from 'react';
import { Route } from 'react-router-dom';
import Error from '../Pages/ErrorPage/Error';
import { useDispatch,useSelector } from 'react-redux';

const PublicRoute = ({ Component }) => {
const loginStatus = useSelector(
  (state) => state.authentication.isAuthenticated
);
  
  return <Route >
    {!loginStatus ? <Component /> : <Error />}
 
  </Route>;
};

export default PublicRoute
