import React,{useRef} from "react";
import Navbar from "./NavBar";
import firebase from "./firebase/firebase.utils";
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import {useHistory} from "react-router-dom";
import AddExpenseButton from "./AddExpenseButton";

const Edit=(props)=>{
    const titleRef=useRef();
    const amountRef=useRef();
    const history=useHistory();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newTitle=titleRef.current.value;
        const newAmount=amountRef.current.value;
        const userId=localStorage.getItem("userId");
        const id=localStorage.getItem("id");
        const expensesRef=firebase.database().ref("Expense-tracker/expenses/"+userId).child(id);
        expensesRef.update({
            title:newTitle,
            amount:newAmount
        });
        localStorage.removeItem("id");
    }
    
    const expensesList=()=>{
        history.push("/expensesList");
    }
    return(
        <div>
        <Navbar />
        <br></br>
        <Box display="flex"  justifyContent="center" alignItems="center" minHeight="80vh"  className="box">
        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={8}>
        <Grid item>
        <AddExpenseButton />
        <Button variant="contained" color="primary" size="Large" className="button" onClick={expensesList}>
        <span class="material-icons" style={{fontSize:"50px"}}>list</span>
        Expenses List
        </Button>
        </Grid>
        <Grid item className="register">
        <form onSubmit={handleSubmit}>
        <h2>Edit Expense</h2>
        <TextField required={true} inputProps={{autoComplete: 'none'}}  id="filled-required" label="Title"  type="text" variant="filled" className="input" inputRef={titleRef}/>
        <br></br>
        <TextField required={true}  inputProps={{autoComplete: 'none'}} id="filled-required1" label="Amount" type="number" variant="filled" className="input" inputRef={amountRef} />
        <br></br>
        <Button variant="contained" color="primary" type="submit"><span class="material-icons">edit</span>Edit Expense</Button>
        </form>
        </Grid>
        </Grid>
        </Box>
        </div>
    )
}
export default Edit;