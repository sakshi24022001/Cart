import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import LocalFloristSharpIcon from '@mui/icons-material/LocalFloristSharp';




const Navbar=({setShow,size})=> {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <LocalFloristSharpIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            />
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1  }}>
            Myntra
          </Typography>
          <Button color="inherit" onClick={()=>setShow(true)}><HomeSharpIcon/></Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit" onClick={()=>setShow(false)}><ShoppingCartSharpIcon/>          <span>
            {size}
          </span></Button>

        </Toolbar>
      </AppBar> 
    </Box>
  );
}
export default Navbar;