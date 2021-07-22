import React,{useState,useEffect} from "react";
import firebase from "./firebase/firebase.utils";
import ExpensesListCom from "./ExpensesListCom"
import Navbar from "./NavBar";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import AddExpenseButton from "./AddExpenseButton";
import ExpensesListButton from "./ExpensesListButton";
import Box from '@material-ui/core/Box';

const ExpensesList=()=>{
    const [expenses,setExpenses]=useState([]);
    const [rerender,setRerender]=useState(true);
    const userId=localStorage.getItem("userId");
    useEffect(()=>{
        if(rerender){
        const expensesRef=firebase.database().ref("Expense-tracker/expenses/"+userId);
        expensesRef.on("value",(snapshot)=>{
            const snap=snapshot.val();
            const temp=[];
            for(let id in snap)
            {
                temp.push({id,...snap[id]});
            }
            if(temp!==expenses)
            setExpenses(temp);
        })
    }},[rerender])
    return(
        <div>
        <Navbar />
        <br></br><br></br><br></br>
        <Box  display="flex"  justifyContent="center"className="box2">
        <AddExpenseButton />
        <ExpensesListButton/>
        </Box>
        <br></br>
        <TableContainer component={Paper}>
        <Table>
        <TableHead>
        <TableRow>
            <TableCell><h1>Title</h1></TableCell>
            <TableCell><h1>Amount</h1></TableCell>
            <TableCell align="right"><h1>Edit</h1></TableCell>
            <TableCell align="right"><h1>Delete</h1></TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
        {expenses.length>0?expenses.map((expense,index)=>{return(<ExpensesListCom key={index} expense={expense} userId={userId}/>)}):null}
        </TableBody>
        </Table>
      </TableContainer>
        </div>
    )
}

export default ExpensesList;