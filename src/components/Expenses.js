import React,{useRef} from "react";
import firebase from "./firebase/firebase.utils";
import NavBar from "./NavBar";
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import AddExpenseButton from "./AddExpenseButton";
import ExpensesListButton from "./ExpensesListButton";

const Expenses=(props)=>{
    const titleRef=useRef();
    const amountRef=useRef();
    const userId=props.userId;
    const handleSubmit=(e)=>{
        e.preventDefault();
        const title=titleRef.current.value;
        const amount=amountRef.current.value;
        const expensesRef=firebase.database().ref("Expense-tracker/expenses/"+userId);
        expensesRef.push({ 'title': title,'amount':amount })
        .then(res => {
            console.log("Added new expense")
        })
        .catch(error => console.log(error));
    }
    
    return(
        <div>
        <NavBar />
        <Box display="flex"  justifyContent="center" alignItems="center" minHeight="80vh"  className="box">
        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={8}>
        <Grid item>
        <AddExpenseButton />
        <ExpensesListButton/>
        </Grid>
        <Grid item className="register">
        <form onSubmit={handleSubmit}>
        <h2>Add an Expense</h2>
        <TextField required={true} inputProps={{autoComplete: 'none'}}  id="filled-required" label="Title"  type="text" variant="filled" className="input" inputRef={titleRef}/>
        <br></br>
        <TextField required={true}  inputProps={{autoComplete: 'none'}} id="filled-required1" label="Amount" type="number" variant="filled" className="input" inputRef={amountRef} />
        <br></br>
        <Button variant="contained" color="primary" type="submit"><span class="material-icons">add_circle_outline</span>
        Add Expense</Button>
        </form>
        </Grid>
        </Grid>
        </Box>
        </div>
    )
}

export default Expenses;