import * as React from 'react';
import { TextField } from "@mui/material";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { json, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



let i= 0;
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );



function Editdata(){

    const navigate = useNavigate();

    const{state} = useLocation();

    const{editdata}=state;

    const [editfirstname, setEditFirstname] = useState("");
    const [editlastname, setEditLastname] = useState("");
    const [editemail, setEditEmail] = useState("");
    const [editpassword, setEditPassword] = useState("");

    
    

    var userEditdata = {
        firstname:editfirstname,
        lastname:editlastname,
        email:editdata.email ,
        password:editpassword
    }
  
    console.log("userEditdata", userEditdata)

    const dataSubmit = () =>{
        const getData = JSON.parse(localStorage.getItem("loginuser"))
        const multipleUserData = JSON.parse(localStorage.getItem('user'));
        
        const user_Edit = multipleUserData.filter((el) => {
          console.log('=+=+=+=+=+=+=',el.email)
          return editdata.email === el.email;
          // if(editdata.email === el.email){
          //   console.log('check',editdata.email === el.email)
          //   // const updatedCharacters = multipleUserData.map(({ firstname, lastname, email, password }) => 
          //   // ({firstname:editfirstname, lastname:editlastname, email:editdata.email, password:editpassword})
          //   return multipleUserData
          // console.log('updatedCharacters',updatedCharacters);
        }
        )
        console.log("user_Edit", user_Edit);

       const findIndex =  multipleUserData.findIndex((el) => {
        return editdata.email === el.email;
       })
       console.log("findIndex", findIndex);


        const updatedCharacters = user_Edit.map(({ firstname, lastname, email, password }) => 
          ({firstname:editfirstname, lastname:editlastname, email:editdata.email, password:editpassword}))
        console.log("updatedCharacters", updatedCharacters)


       multipleUserData[findIndex] = updatedCharacters[0];
       localStorage.setItem('user', JSON.stringify(multipleUserData))
      //  console.log("newData", newData)
      

      //  const updateData = multipleUserData.splice(findIndex, 1 , updatedCharacters)
      //  console.log("updateData", updateData);
       
      
        if(getData.email === editdata.email){
          localStorage.removeItem('loginuser');   
          localStorage.setItem("loginuser", JSON.stringify(userEditdata));
          navigate('/')
        }
    }
 

    return(
        <>
        <Card sx={{ minWidth: 275 }}>
       <CardContent>
       <TextField
          defaultValue={editdata.firstname}
          variant="standard"
          label="firstname"
          placeholder="Enter Your Email"
          onChange={(e) => setEditFirstname(e.target.value)}
        />
       <TextField
          defaultValue={editdata.lastname}
          variant="standard"
          label="Lastname"
          placeholder="Enter Your Lastname"
          onChange={(e) => setEditLastname(e.target.value)}
        />
       {/* <TextField
           defaultValue={editdata.email}
          variant="standard"
          label="Email"
          placeholder="Enter Your Email"
          onChange={(e) => setEditEmail(e.target.value)}
        /> */}
       <TextField
           defaultValue={editdata.password}
          variant="standard"
          label="Password"
          placeholder="Enter Your Password"
          onChange={(e) => setEditPassword(e.target.value)}
        />
      </CardContent>
      <CardActions>
        <Button onClick={() => dataSubmit()}    size="small">Submit</Button>
      </CardActions>
    </Card>

    </>
    )
}
export default Editdata;