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
import { Outlet } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Editdata from './Editdata';
import { Link } from '@mui/material'



export default function Dashboard() {
  const btnstyle = {margin:'20px 10px', width:'200px'}
  const navigate = useNavigate();
  const{state} = useLocation();
  const [authenticated, setauthenticated] = useState(null);

  const userLogout = () =>{
    console.log("===========data", getData)
    localStorage.removeItem("authenticated");
    navigate('/Login');
  }
  
  const getData = JSON.parse(localStorage.getItem("loginuser"))
  console.log("==========", getData);

  const dataUpdate = () =>{
    navigate('/Editdata' , {state : {editdata : getData}})
  }
  

  return (
    <>
    <Card sx={{ maxWidth: 400 , marginLeft:10 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            D
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={getData.firstname}
      />
      <CardContent>
        <Typography variant="h6" >
           Firstname : <br></br>
          {getData.firstname}
        </Typography>
        <Typography variant="h6" >
          Lastname :  <br></br>
          {getData.lastname}
        </Typography>
        <Typography variant="h6"  >
         Email : <br></br>
         {getData.email}
        </Typography>
        <Typography variant="h6" >
         Password : <br></br>
        {getData.password}
        </Typography>
        {/* <Editdata/> */}
      </CardContent>
      <CardActions >
      <Button onClick={() =>dataUpdate()} variant="contained" color="primary" >
          Edit
      </Button><br></br>   
      </CardActions>
      <Button onClick={()=>userLogout()} variant="contained" color="primary" style={btnstyle}>
          LogOut
      </Button>
    </Card>
  
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Firstname</TableCell>
            <TableCell align="right">Lastname</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Password</TableCell>
            <TableCell align="right">Photo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

            
            <TableCell align="right">{getData.firstname}</TableCell>
            <TableCell align="right">{getData.lastname}</TableCell>
            <TableCell align="right">{getData.email}</TableCell>
            <TableCell align="right">{getData.password}</TableCell>
            {/* <img src={require('./Uploadfile/10_SAKSHAM QUIZ.jpeg')}/> */}
            {/* <img src={require('./Uploadfile/' + userdata.file)}/> */}
            
        </TableBody>
       </Table>
     </TableContainer>
     <Button onClick={()=>userLogout()} variant="contained" color="primary" style={btnstyle} fullWidth>
          LogOut
    </Button>
    </>
    
   );

};
