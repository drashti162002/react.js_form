import * as React from "react";
import {
  Avatar,
  Grid,
  Button,
  Paper,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

var user_data = [];

const Register = () => {
  const paperstyle = { padding: 40, width: 280, margin: "20px auto" };
  const avatarstyle = { backgroundColor: "green" };
  const btnstyle = { margin: "20px 0px" };

  //   const {register, dataRegister , error} = useForm()

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imagefile, setimagefile] = useState("");

  const [incorretfirstname, setincorretfirstname] = useState("true");
  const [incorretlastname, setincorretlastname] = useState("false");
  const [incorretemail, setincorretemail] = useState("false");
  const [incorretpassword, setincorretpassword] = useState("false");

  const navigate = useNavigate();

  function dataRegister() {
    // console.log("data");

    // if(firstname == null || firstname == ''){
    //     console.log("=======================")
    //     setincorretfirstname(false);
    //    // alert("name is required")
    // }

    var user_data = [];
    var user = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    };

    user_data.push(user);
    console.log("user_data", user_data);
    localStorage.setItem("user", JSON.stringify(user_data));

    if (firstname == null || firstname == "") {
      console.log("=======================");
      setincorretfirstname(false);
      //alert("name is required")
    }

    // navigate('/Login');
  }

  return (
    <Grid>
      <Paper elevation={10} style={paperstyle}>
        <Grid align="center">
          <Avatar style={avatarstyle}>
            <LockIcon />
          </Avatar>
          <h2>Register Form </h2>
        </Grid>

        <Grid margin="15px 0px">
          <TextField
            value={firstname}
            name="Firstname"
            variant="standard"
            label="Firstname"
            placeholder="Enter Your Firstname"
            onChange={(e) => setFirstname(e.target.value)}
            fullWidth
            helperText={incorretfirstname ? " " : "error"}
            //  ref={register({required:"Firstname is required"})}
          />
        </Grid>
        <Grid margin="15px 0px">
          <TextField
            value={lastname}
            name="Lastname"
            variant="standard"
            label="Lastname"
            placeholder="Enter Your Lastname"
            onChange={(e) => setLastname(e.target.value)}
            fullWidth
            //ref={register({required:"Lastname is required"})}
          />
        </Grid>
        <Grid margin="15px 0px">
          <TextField
            value={email}
            name="Email"
            variant="standard"
            label="Email"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            //   ref={register({required:"Email is required"})}
          />
        </Grid>
        <Grid margin="15px 0px">
          <TextField
            value={password}
            name="password"
            variant="standard"
            label="Password"
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            //  ref={register({required:"Password is required"})}
          />
          <Grid  margin="15px 0px">
          <TextField 
          value={imagefile}
          name="upload-photo" 
          type="file" />
          </Grid>
        </Grid>

        <Button
          onClick={() => dataRegister()}
          variant="contained"
          color="primary"
          style={btnstyle}
          fullWidth
        >
          Sign In
        </Button>
        <Typography>
          <Link href="#">Forget password ?</Link>
        </Typography>
        <Typography>
          Do you have an account ?<Link href="#">Register</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Register;
