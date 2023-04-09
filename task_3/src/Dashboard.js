import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';


export default function Dashboard() {
  const btnstyle = {margin:'20px 0px'}
  const navigate = useNavigate();
  const{state} = useLocation();
  const [authenticated, setauthenticated] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    console.log("localStorage.getItem", localStorage.getItem("authenticated"))
    console.log("loggedInUser", loggedInUser)
     if (loggedInUser) {
         setauthenticated(loggedInUser);
        }
    });


  
    // if (!authenticated) {
    //   console.log("============",!authenticated)
    //   navigate("/Login");
    //   } 
    // else {

  const{userdata}=state;

  //const{loginUserData} = state;

  console.log("Dashborddata", userdata);

  const userLogout = () =>{
    console.log("===========data", userdata)
    localStorage.removeItem("authenticated");
    navigate('/Login');
  }
  
  return (
    <>
    <Button onClick={()=>userLogout()} variant="contained" color="primary" style={btnstyle} fullWidth>
          LogOut
    </Button>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Firstname</TableCell>
            <TableCell align="right">Lastname</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Password</TableCell>
            <TableCell align="right">Photo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

            
            <TableCell align="right">{userdata.firstname}</TableCell>
            <TableCell align="right">{userdata.lastname}</TableCell>
            <TableCell align="right">{userdata.email}</TableCell>
            <TableCell align="right">{userdata.password}</TableCell>
            {/* <img src={require('./Uploadfile/10_SAKSHAM QUIZ.jpeg')}/> */}
            {/* <img src={require('./Uploadfile/' + userdata.file)}/> */}
            
        </TableBody>
       </Table>
     </TableContainer>
    </>
   );

};
