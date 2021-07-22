import React from "react";
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

const AddExpenseButton=()=>{
    const history=useHistory();
    const addExpense=()=>{
        history.push("/profile");
    }
    return(
        <Button variant="contained" color="primary" size="Large" className="button" onClick={addExpense} style={{marginRight:"20px"}} > 
        <span class="material-icons" style={{fontSize:"50px"}}>add_circle_outline</span>
        Add Expense
        </Button>
    )
}
export default AddExpenseButton;