import * as React from 'react';
import {Avatar, Grid, Button, Paper, TextField,Typography,Link} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { useState }from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function Login(){
  const paperstyle={padding:40, width:280, margin:'20px auto'}
  const avatarstyle = {backgroundColor:'green'}
  const btnstyle = {margin:'20px 0px'}

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [incorretemail, setincorretemail] = useState("false");
  const [incorretpassword, setincorretpassword] = useState("false");
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  let loggedInUser;

  const navigate = useNavigate();
  
  let i=0;  
  
  const preventDefault = (event) => {
    event.preventDefault();
    navigate("/Register");
  }

  function dataLogin(){

    if (email == null || email == "" || !email.includes("@")) {
        setincorretemail(false);
    } else if (
        password == null || password == "" || password.length < 5 || password.includes("0-9") ) {
        setincorretpassword(false);
    } else{

    const loginuser = JSON.parse(localStorage.getItem('user'));
    let validUser = false;
    if(loginuser === null){
        alert("You are not Register");
    }else{
    for(i=0; i<loginuser.length; i++){  
        console.log('login user ', loginuser[i])
        if(email === loginuser[i].email &&  password === loginuser[i].password){
                validUser = true;
                loggedInUser = loginuser[i]
                break;
            }
      }
      console.log("==================", loggedInUser)

    const userinformation = JSON.stringify(loginuser);

    console.log(userinformation);
    
    if(validUser) { 
      setauthenticated(true)
      localStorage.setItem("authenticated", true);
      navigate("/", {state : {userdata :loggedInUser }});}
    else
     {alert("wrong Email and Password");}
    
    console.log("length", loginuser.length)
    console.log('loginuser', loginuser);

    }
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
        <Typography>
         Don't have an account? <Link href="/Register" onClick={preventDefault}> Register</Link>
        </Typography>
      </Paper>
    </Grid>
    )
}

export default Login;