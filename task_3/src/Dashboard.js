import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// function createData(Firstname, Lastname, Email, Password, Photo) {
//   return { Firstname, Lastname, Email, Password, Photo };
// }

export default function Dashboard() {
  
  // const loginuser = JSON.parse(localStorage.getItem('user'));
  // console.log("loginuser" , loginuser)
  // console.log("firstname", loginuser[0].firstname)

 // const [authenticated, setauthenticated] = useState(null);

  const{state}=useLocation();
  
  const{userdata}=state;

  //const{loginUserData} = state;

  console.log("Dashborddata", userdata);

  // console.log("loginUserData", loginUserData);
  // console.log("loginUserData", loginUserData.userLogginData);
  // const tabledata = JSON.parse(userdata);

  // console.log('tabledata',tabledata);

  // console.log("firstname", tabledata[0].firstname)
  return (
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
            {/* <TableCell align="right">{tabledata[0].firstname}</TableCell>
            <TableCell align="right">{tabledata[0].lastname}</TableCell>
            <TableCell align="right">{tabledata[0].email}</TableCell>
            <TableCell align="right">{tabledata[0].password}</TableCell> */}
            
            <TableCell align="right">{userdata.firstname}</TableCell>
            <TableCell align="right">{userdata.lastname}</TableCell>
            <TableCell align="right">{userdata.email}</TableCell>
            <TableCell align="right">{userdata.password}</TableCell>
            {/* <img src={require('./Uploadfile/10_SAKSHAM QUIZ.jpeg')}/> */}
            {/* <img src={require('./Uploadfile/' + userdata.file)}/> */}
            
            
           {/* <TableCell align="right">{}</TableCell> */}  

          {/* {loginuser.map((loginuser) => (
            <TableRow
              key={loginuser.Firstname}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {loginuser.Firstname}
              </TableCell>
              <TableCell align="right">{loginuser}</TableCell>
              <TableCell align="right">{loginuser}</TableCell>
              <TableCell align="right">{loginuser}</TableCell>
              <TableCell align="right">{loginuser}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
       </Table>
     </TableContainer>
   );
}