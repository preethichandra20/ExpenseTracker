import React from "react";
import firebase from "./firebase/firebase.utils";
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


const ExpensesListCom=(props)=>{
    const history=useHistory();
    const deleteExpense=()=>{
        const expensesRef=firebase.database().ref("Expense-tracker/expenses/"+props.userId).child(props.expense.id);
        expensesRef.remove();
    }
    const editExpense=()=>{
        localStorage.setItem("id",props.expense.id);
        history.push("/edit");
    }
    return(
            <TableRow key={props.key}>
              <TableCell component="th" scipe="row"  style={{fontSize:"25px"}}>{props.expense.title}</TableCell>
              <TableCell component="th" scope="row"  style={{fontSize:"25px"}}>{props.expense.amount}</TableCell>
              <TableCell align="right"><Button variant="contained" color="primary" type="submit" onClick={editExpense}>
              <span class="material-icons">edit</span>
              Edit Expense</Button></TableCell>
              <TableCell align="right"><Button variant="contained" color="secondary" type="submit" onClick={deleteExpense}>
              <span class="material-icons">delete</span>Delete Expense</Button></TableCell>
            </TableRow>
    )
}

export default ExpensesListCom;