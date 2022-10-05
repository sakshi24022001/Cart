import React ,{useState} from "react";
import Axios from "axios";
// import Shopping from "./components/shopping";
import {BrowserRouter, Routes,Route,Link }from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

 
const Registration=()=> {
    const [usernameReg, setUernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState ("");
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

// const BasicModal=()=> {
//       const [open, setOpen] = React.useState(false);
//       const handleOpen = () => setOpen(true);
//       const handleClose = () => setOpen(false);

    
    const register = () => {
        Axios.post("http://localhost:5000/registration", {
          username: usernameReg,
          password: passwordReg,
         }).then((response) => {
            console.log("hyyyyyyyy",response);
         });
       };
     
       const style = {
         position: "absolute", 
         top: '50%',
         left: '50%',
         transform: 'translate(-50%, -50%)',
         width: 400,
         bgcolor: 'background.paper',
         border: '2px solid #000',
         boxShadow: 24,
         p: 4,
       };

   return (
    <>
     <div className="App">
        <div className="registration">
         {/* <Routes>
          <Route path ="/shopping" element={<S
            hopping/>}/>
         </Routes> */}
          {/* <Link to ="/registration"><Button color="inherit">Login</Button></Link> */}
          <Button onClick={handleOpen}>Registration</Button>
          <Modal
           open={open}
           onClose={handleClose}
           aria-labelledby="modal-modal-title"
           aria-describedby="modal-modal-description"
           >
         <Box sx={style}>
           <Typography id="modal-modal-title" variant="h6" component="h2">
           <label>Username</label>
           <input type="text"onChange={(e) => { setUernameReg(e.target.value);}}/><br/>
           <label>password</label>
           <input type="text" onChange={(e) => {  setPasswordReg(e.target.value);}}/> <br />
           <button onClick={register} > Register</button>
          </Typography>
        </Box>
      </Modal>



           {/* <h1>Registration</h1>
           <label>Username</label>
           <input type="text"onChange={(e) => { setUernameReg(e.target.value);}}/><br/>
           <label>password</label>
           <input type="text" onChange={(e) => {  setPasswordReg(e.target.value);}}/> <br />
           <button onClick={register} > Register</button> */}

        </div>
        
        </div>
     </>
   );
         }


export default Registration;