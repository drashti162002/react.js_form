import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Firstname, Lastname, Email, Password, Photo) {
  return { Firstname, Lastname, Email, Password, Photo };
}

export default function Dashboard() {
  
  const loginuser = JSON.parse(localStorage.getItem('user'));
  console.log("loginuser" , loginuser)

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
        {/* <TableBody>
          {loginuser.map((loginuser) => (
            <TableRow
              key={loginuser[i].Firstname}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {loginuser[i].Firstname}
              </TableCell>
              <TableCell align="right">{loginuser}</TableCell>
              <TableCell align="right">{loginuser}</TableCell>
              <TableCell align="right">{loginuser}</TableCell>
              <TableCell align="right">{loginuser}</TableCell>
            </TableRow>
          ))}
        </TableBody> */}
      </Table>
    </TableContainer>
  );
}