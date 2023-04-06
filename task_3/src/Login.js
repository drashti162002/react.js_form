import * as React from 'react';
import {Avatar, Grid, Button, Paper, TextField,Typography,Link} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { useState }from 'react';
import { useNavigate } from 'react-router-dom';





function Login(){
  const paperstyle={padding:40, width:280, margin:'20px auto'}
  const avatarstyle = {backgroundColor:'green'}
  const btnstyle = {margin:'20px 0px'}

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [incorretemail, setincorretemail] = useState("false");
  const [incorretpassword, setincorretpassword] = useState("false");
  const navigate = useNavigate();
  
  let i=0;  


  function dataLogin(){

    if (email == null || email == "" || !email.includes("@")) {
        setincorretemail(false);
    } else if (
        password == null || password == "" || password.length < 5 || password.includes("0-9") ) {
        setincorretpassword(false);
    } else{

    const loginuser = JSON.parse(localStorage.getItem('user'));
    let validUser = false;
    
    for(i=0; i<loginuser.length; i++){  
        console.log('login user ', loginuser[i])
        if(email === loginuser[i].email &&  password === loginuser[i].password){
                // navigate("/Dashboard");
                validUser = true;
                break;
            }
         else{
        // alert("wrong Email and Password");
        // validUser = false;
      }
        // for(j=0; j<loginuser.email; j++){
        // const newemail = loginuser[j].email
       // console.log("newloginemail", loginuser[j].email);
        // const useremail = loginuser[i].email
        // const userpassword = loginuser[i].password
        // console.log("useremail", useremail)
        // console.log("userpassword", userpassword)
      }
    
    if(validUser) 
     {navigate("/Dashboard");}
    else
     {alert("wrong Email and Password");}
    
    console.log("length", loginuser.length)
    //console.log("newloginemail", loginuser[j].email)
   // console.log("newemail",loginuser[0].email);
    console.log('loginuser', loginuser);

    
    // if(email === useremail &&  password === userpassword){
    //     navigate("/Dashboard");
    // }
    // else{
    //     alert("wrong Email and Password");
    // }
    }}

    return(
     <Grid>
      <Paper elevation={10} style={paperstyle}>
        <Grid align="center">
          <Avatar style={avatarstyle}>
            <LockIcon />
          </Avatar>
          <h2>Login Form </h2>
        </Grid>
        <Grid margin="15px 0px">
        <TextField
          value={email}
          variant="standard"
          label="Email"
          placeholder="Enter Your Email"
          onChange={(e)=>setEmail(e.target.value)}
          fullWidth
          helperText={incorretemail ? " " : " This filed is required "}

        />
        </Grid>
        <Grid margin="15px 0px">
        <TextField
          value={password}
          variant="standard"
          label="Password"
          type="password"
          placeholder="Enter Password"
          onChange={(e)=>setPassword(e.target.value)}
          fullWidth
          helperText={incorretpassword ? " " : " This filed is required "}
        />
        </Grid>
     
    
        <Button onClick={()=>dataLogin()} variant="contained" color="primary" style={btnstyle} fullWidth>
          Login In
        </Button>
      </Paper>
    </Grid>
    )
}

export default Login;