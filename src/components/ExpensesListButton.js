import React from "react";
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

const ExpensesListButton=()=>{
    const history=useHistory();
    const expensesList=()=>{
        history.push("/expensesList");
    }
    return(
        <Button variant="contained" color="primary" size="Large" className="button" onClick={expensesList}>
        <span class="material-icons" style={{fontSize:"50px"}}>list</span>
        Expenses List
        </Button>
    )
}
export default ExpensesListButton;