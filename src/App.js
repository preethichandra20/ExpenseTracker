import React,{useContext,Fragment} from "react";
import {Router,Route,Switch,Redirect} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Error from "./components/Error";
import Edit from "./components/Edit";
import Expenses from "./components/Expenses";
import ExpensesList from "./components/ExpensesList";
import AuthContext from "./components/store/AuthContext";
import history from './components/history';

function App() {
  const authCntxt=useContext(AuthContext);
  const isUserLoggedIn=authCntxt.isUserLoggedIn;
  return (
    <Router history={history}>
    <Fragment>
    <Switch>
    <Route exact path="/">
    {isUserLoggedIn && <Redirect to="/profile" />}
    {!isUserLoggedIn && <Register />}
    </Route>
    <Route exact path="/login">
    {isUserLoggedIn && <Redirect to="/profile" />}
    {!isUserLoggedIn && <Login />}
    </Route>
    <Route exact path="/profile">
    {isUserLoggedIn && <Profile />}
    {!isUserLoggedIn && <Redirect to="/login" />}
    </Route>
    <Route exact path="/edit">
    {isUserLoggedIn && <Edit />}
    {!isUserLoggedIn && <Redirect to="/login" />}
    </Route>
    <Route exact path="/newExpense">
    {isUserLoggedIn && <Expenses />}
    {!isUserLoggedIn && <Redirect to="/login" />}
    </Route>
    <Route exact path="/expenseslist">
    {isUserLoggedIn && <ExpensesList />}
    {!isUserLoggedIn && <Redirect to="/login" />}
    </Route>
    <Route exact path="*" ><Error /></Route>
    </Switch>   
    </Fragment>
    </Router>
  );
}

export default App;
